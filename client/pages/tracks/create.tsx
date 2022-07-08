import React, { useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import StepDownloaing from '../../components/StepDownloaing'
import FileUpload from '../../components/FileUpload'
import { useInput } from './../../hooks/useInput';
import axios from 'axios'
import { useRouter } from 'next/router';

const create = () => {
    const [ activeStep, setActiveStep ] = useState(0)
    const [ picture, setPicture] = useState(null)
    const [ audio, setAudio] = useState(null)
    const nameTrack = useInput('')
    const nameArtist = useInput('')
    const textTrack = useInput('')
    const router = useRouter()

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            const formData = new FormData()
            formData.append('name', nameTrack.value)
            formData.append('artist', nameArtist.value)
            formData.append('text', textTrack.value)
            formData.append('picture', picture)
            formData.append('audio', audio)
            
            axios.post('http://localhost:5000/tracks', formData)
                .then(response => router.push(('/tracks')))
                .catch(e => console.log('e', e))
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
       <MainLayout>
           <StepDownloaing activeStep={activeStep}>
                {activeStep === 0 &&
                    <div className='flex-col p-10'>
                        <div className='mt-5'>
                            <label htmlFor="nameTrack" className="block text-sm font-medium text-gray-700">Назвине трека</label>
                            <div className="mt-1 relative rounded-md border-lime-700">
                                <input 
                                    {...nameTrack}
                                    type="text" 
                                    name="nameTrack" 
                                    id="nameTrack"
                                    className="focus-visible:border-red-500 focus-visible:border-red-500 focus:border-red-500 focus:border-red-500 block w-full pl-2 py-3 rounded-md" placeholder="Essketit" />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="nameArtist" className="block text-sm font-medium text-gray-700">Имя исполинтеля</label>
                            <div className="mt-1 relative rounded-md border-lime-700">
                                <input
                                    {...nameArtist}
                                    type="text" 
                                    name="nameArtist" 
                                    id="nameArtist"
                                    className="focus-visible:border-red-500 focus-visible:border-red-500 focus:border-red-500 focus:border-red-500 block w-full pl-2 py-3 rounded-md" placeholder="Lil pump" />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="textTrack" className="block text-sm font-medium text-gray-700">Текст трека</label>
                            <div className="mt-1 relative rounded-md border-lime-700">
                                <textarea
                                    {...textTrack}
                                    rows={3}
                                    name="textTrack" 
                                    id="textTrack"
                                    className="focus-visible:border-red-500 focus-visible:border-red-500 focus:border-red-500 focus:border-red-500 block w-full pl-2 py-3 rounded-md" placeholder="Only wear designed, essketit" />
                            </div>
                        </div>
                    </div>
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept='image/*'>
                        <button>Загрузить обложку</button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept='audio/*'>
                        <button>Загрузить аудио</button>
                    </FileUpload>
                }
           </StepDownloaing>
           <div className='justify-between flex mt-10 w-2/4'>
               <button className='bg-sky-500 text-white px-3 py-2 rounded text font-medium cursor-pointer' disabled={activeStep === 0} onClick={back}>Назад</button>
               <button className='bg-sky-500 text-white px-3 py-2 rounded text font-medium cursor-pointer' onClick={next}>Далее</button>
           </div>
       </MainLayout>
    )
}

export default create
