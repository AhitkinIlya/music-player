import React from 'react'
import PauseIcon from './icons/PauseIcon'
import PlayIcon from './icons/PlayIcon'
import PlayerProgress from './PlayerProgress'
import VolumeIcon from './icons/VolumeIcon'
import PlayerVolume from './PlayerVolume'

const Player = () => {
    const track: ITrack = {
        _id: '1', 
        name: 'Трек 1', 
        artist: 'lil pump', 
        text: 'essketit', 
        listens: 100, 
        audio: 'http://localhost:5000/audio/e57edca6-8399-42c2-aabe-5dd6eb89a8e7.mp3', 
        picture: 'http://localhost:5000/image/6932f20c-cc98-4201-8abd-97e7ce07e742.jpg',
        comments: []
    }
    const active = false

    return (
        <div className='w-full h-20 fixed bottom-0 flex flex-col justify-center'>
            <PlayerProgress left={0} right={100} onChange={() => {}} />
            <div className='w-full h-full flex items-center px-10'>
                <div onClick={e => e.stopPropagation()}>
                    {active 
                        ? <PauseIcon />
                        : <PlayIcon />
                    }
                </div>
                <div className='container flex flex-col w-200'>
                    <div>{track.name}</div>
                    <div className='text-xs text-gray-500'>{track.artist}</div>
                </div>
                <VolumeIcon />
                <PlayerVolume left={0} right={0} onChange={() => {}} />
            </div>
        </div>
    )
}

export default Player
