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
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div className='ml-1'>{(left / right * 100).toFixed(0)}%</div>
        </div>
    )
}

export default PlayerVolume
