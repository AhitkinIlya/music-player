import React from 'react'

interface PlayerProgressProps {
    left: number;
    right: number;
    onChange: (e) => void
}

const PlayerProgress: React.FC<PlayerProgressProps> = ({left, right, onChange}) => {
    return (
        <div className='w-full h-7'>
            <div className='w-full bg-gray-300 relative h-full'>
                <div className='absolute left-10'>{left}</div>
                <div className='absolute right-10'>{right}</div>
            </div>
        </div>
    )
}

export default PlayerProgress
