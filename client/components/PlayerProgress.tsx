import React, { useRef } from 'react'

interface PlayerProgressProps {
    left: number;
    right: number;
    onChange: (e) => void
}

const PlayerProgress: React.FC<PlayerProgressProps> = ({left, right, onChange}) => {
    const toolTip = useRef()
    const progressBar = useRef()

    const toConvertTimeToHuman = (time) => {
        const minutes = time / 60
        const integerNumber = Math.trunc(minutes)
        const notIntegerNumber = +((minutes - integerNumber) * 60).toFixed(2)
        
        const prefixStringForSeconds = notIntegerNumber < 10 ? ':0' : ':'
        return '0' + integerNumber + prefixStringForSeconds + notIntegerNumber
    }

    const mouseMove = (e) => {
        const element = toolTip.current
        const progressEl = progressBar.current

        const ratioTimeWidth = progressEl.offsetWidth / right
        const time = Math.floor(e.clientX / ratioTimeWidth)

        const widthElement = element.offsetWidth
        
        toolTip.current.style.left = e.pageX - (+widthElement / 2)  + 'px'
        toolTip.current.textContent = toConvertTimeToHuman(time)
    }

    const onMouseLeave = (e) => {
        toolTip.current.classList.add('hidden')
    }

    const onMouseEnter = (e) => {
        toolTip.current.classList.remove('hidden')
    }
    
    return (
        <div ref={progressBar} onMouseMove={mouseMove} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='w-full relative h-7 bg-gray-300'>
            <div className='absolute left-10'>{toConvertTimeToHuman(left)}</div>
            <div className='absolute right-10'>{toConvertTimeToHuman(right)}</div>
            <div style={{width: `${left / right * 100}%`}} className='h-full bg-yellow-300'></div>
            <div ref={toolTip} className='absolute bottom-8 hidden'></div>
        </div>
    )
}

export default PlayerProgress
