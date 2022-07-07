import React from 'react'

interface PlayerProgressProps {
    left: number;
    right: number;
    onChange: (e) => void
}

const PlayerProgress: React.FC<PlayerProgressProps> = ({left, right, onChange}) => {
    return (
        <div className='w-full relative h-7 bg-gray-300'>
            <div className='absolute left-10'>{left / 60}</div>
            <div className='absolute right-10'>{right / 60}</div>
            <div style={{width: `${left / right * 100}%`}} className='h-full bg-yellow-300'></div>
        </div>
    )
}

export default PlayerProgress
