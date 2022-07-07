import React from 'react'
import { ITrack } from '../types/track'
import PauseIcon from './icons/PauseIcon'
import PlayIcon from './icons/PlayIcon'
import TrashIcon from './icons/TrashIcon'
import { useRouter } from '../node_modules/next/router'
import { useActions } from './../hooks/useActions';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()
    const { playTrack, pauseTrack, setActiveTrack } = useActions()

    const play = (e) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()
    }

    return (
        <div 
            className='flex items-center p-4 rounded font-medium shadow-[0_2px_7px_-2px_rgb(0,0,0,0.3)]'
            onClick={() => router.push('/tracks/' + track._id)}
        >
            <div onClick={play}>
                {active 
                    ? <PauseIcon />
                    : <PlayIcon />
                }
            </div>
            <img width={70} height={70} src={track.picture} />
            <div className='container flex flex-col w-200'>
                <div>{track.name}</div>
                <div className='text-xs text-gray-500'>{track.artist}</div>
            </div>
            {active && <div>01:35 / 03:15</div>}
            <div onClick={e => e.stopPropagation()} className='ml-auto'>
                <TrashIcon />
            </div>
        </div>
    )
}

export default TrackItem
