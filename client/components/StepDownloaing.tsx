import React from 'react'
import DoneIcon from './icons/DoneIcon'

interface StepDownloadingProps {
    activeStep: number
}

const steps = ['Информация о треке', 'Загрузите обложку трека', 'Загрузите трек']

const StepDownloaing: React.FC<StepDownloadingProps> = ({activeStep, children}) => {
    return (
        <div className='w-300'>
            <div>
                <ul className='bg-white text-center list-none flex justify-center mb-24'>
                    {steps.map((step, index) => (
                        <li 
                            className={`mx-10 mb-0 text-gray-500 flex items-center font-medium`}
                        >
                            <DoneIcon color={activeStep > index ? 'text-green-500' : 'text-gray-500'} />
                            <div className={`text-xl pl-2 ${activeStep === index ? 'text-gray-900' : ''}`}>
                                {step}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='container justify-center my-70 h-270'>
                <div className='w-600 shadow-[0_2px_7px_-2px_rgb(0,0,0,0.3)]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default StepDownloaing
