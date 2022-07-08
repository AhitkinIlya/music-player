import React from 'react'

interface PlayerProgressProps {
    left: number;
    right: number;
    onChange: (e) => void
}

const PlayerProgress: React.FC<PlayerProgressProps> = ({left, right, onChange}) => {

    const toConvertTimeToHuman = (time) => {
        const minutes = time / 60
        const integerNumber = Math.trunc(minutes)
        const notIntegerNumber = +((minutes - integerNumber) * 60).toFixed(2)
        
        const prefixStringForSeconds = notIntegerNumber < 10 ? ':0' : ':'
        return '0' + integerNumber + prefixStringForSeconds + notIntegerNumber
    }
    
    return (
        <div className='w-full relative h-7 bg-gray-300'>
            <div className='absolute left-10'>{toConvertTimeToHuman(left)}</div>
            <div className='absolute right-10'>{toConvertTimeToHuman(right)}</div>
            <div style={{width: `${left / right * 100}%`}} className='h-full bg-yellow-300'></div>
        </div>
    )
}

export default PlayerProgress
