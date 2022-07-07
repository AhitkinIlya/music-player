import React from 'react'

interface PlayerVolume {
    left: number;
    right: number;
    onChange: (e) => void
}

const PlayerVolume: React.FC<PlayerVolume> = ({right, left, onChange}) => {
    return (
        <div className='flex ml-3'>
            <input
                type='range'
                min={left}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div className='ml-1'>{left} / {right}</div>
        </div>
    )
}

export default PlayerVolume
