import React from 'react'
import { ITrack } from '../types/track'
import PauseIcon from './icons/PauseIcon'
import PlayIcon from './icons/PlayIcon'
import TrashIcon from './icons/TrashIcon'
import { useRouter } from '../node_modules/next/router'
import { useActions } from './../hooks/useActions';
import { deleteTrack } from '../store/actions-creators/track'
import { useTypedSelector } from './../hooks/useTypedSelector';

interface TrackItemProps {
    track: ITrack;
}

const TrackItem: React.FC<TrackItemProps> = ({track}) => {
    const router = useRouter()
    const { playTrack, pauseTrack, setActiveTrack, deleteTrack } = useActions()
    const { pause, active } = useTypedSelector(state => state.player)
    
    const play = async (e) => {
        e.stopPropagation()
        if (track._id !== active?._id) {
            setActiveTrack(track)
        }
        if (pause) {
            playTrack()
        } else {
            pauseTrack()
        }
    }

    const deleteItem = (e, id) => {
        e.stopPropagation()
        deleteTrack(id)
    }

    const toTrackInfo = (e) => {
        e.stopPropagation()
        router.push('/tracks/' + track._id)
    }

    return (
        <div 
            className='flex items-center p-4 rounded font-medium shadow-[0_2px_7px_-2px_rgb(0,0,0,0.3)]'
            onClick={(e) => toTrackInfo(e)}
        >
            <div onClick={play}>
                {track._id === active?._id && !pause
                    ? <PauseIcon />
                    : <PlayIcon />
                }
            </div>
            <img className='ml-2' width={70} height={70} src={'http://localhost:5000/' +track.picture} />
            <div className='container flex flex-col w-200 ml-3'>
                <div>{track.name}</div>
                <div className='text-xs text-gray-500'>{track.artist}</div>
            </div>
            <div>01:35 / 03:15</div>
            <div onClick={(e) => deleteItem(e, track._id)} className='ml-auto'>
                <TrashIcon />
            </div>
        </div>
    )
}

export default TrackItem
