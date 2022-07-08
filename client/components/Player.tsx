import React, { useEffect } from 'react'
import PauseIcon from './icons/PauseIcon'
import PlayIcon from './icons/PlayIcon'
import PlayerProgress from './PlayerProgress'
import VolumeIcon from './icons/VolumeIcon'
import PlayerVolume from './PlayerVolume'
import { useTypedSelector } from './../hooks/useTypedSelector'
import { useActions } from './../hooks/useActions'
import { ITrack } from '../types/track'

let audio;

const Player = () => {
    const { pause, volume, active, duration, currentTime } = useTypedSelector(state => state.player)
    const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack } = useActions()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
            setAudio()
            play()
        } else {
            setAudio()
            play()
        }
    }, [active])

    useEffect(() => {
        if (!pause) {
            audio.play()
        } else {
            audio.pause()
        }
    }, [pause])

    const setAudio = () => {
        if (active) {
            audio.src = 'http://localhost:5000/' + active.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const play = () => {
        if (pause) {
            playTrack()
        } else {
            pauseTrack()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = +e.target.value / 100
        setVolume(+e.target.value)
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = +e.target.value
        setCurrentTime(+e.target.value)
    }

    if (!active) {
        return null
    }

    return (
        <div className='w-full h-20 fixed bottom-0 flex flex-col justify-center'>
            <PlayerProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
            <div className='w-full h-full flex items-center px-10'>
                <div onClick={play}>
                    {!pause 
                        ? <PauseIcon />
                        : <PlayIcon />
                    }
                </div>
                <div className='container flex flex-col w-200'>
                    <div>{active?.name}</div>
                    <div className='text-xs text-gray-500'>{active?.artist}</div>
                </div>
                <VolumeIcon />
                <PlayerVolume left={volume} right={100} onChange={changeVolume} />
            </div>
        </div>
    )
}

export default Player
