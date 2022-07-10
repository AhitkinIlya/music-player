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
    const [ prevImg, setPrevImg ] = useState(null)
    const [ prevAudio, setPrevAudio ] = useState(null)
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

    const pickImg = (data) => {
        var reader  = new FileReader();

        reader.onload = (e) => {
            setPrevImg(e.target.result)
        }
      
        reader.readAsDataURL(data);
        setPicture(data)
    }

    const pickAudio = (data) => {
        const array = data.name.split('.')
        setPrevAudio({
            name: array[0],
            format: array[1]
        })
        setAudio(data)
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
       <MainLayout>
           <StepDownloaing activeStep={activeStep}>
                {activeStep === 0 &&
                    <div className='flex-col w-full'>
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
                    <>
                        {!prevImg ?
                            <FileUpload setFile={pickImg} accept='image/*'>
                                <button className='bg-green-500 text-white px-3 py-3 rounded text font-medium cursor-pointer'>Загрузить обложку</button>
                            </FileUpload> : 
                            <img src={prevImg} className="border border-black rounded w-2/5 object-center object-cover" />
                        }
                    </>
                }
                {activeStep === 2 &&
                    <>
                        {!prevAudio ? 
                            <FileUpload setFile={pickAudio} accept='audio/*'>
                                <button className='bg-green-500 text-white px-3 py-3 rounded text font-medium cursor-pointer'>Загрузить аудио</button>
                            </FileUpload> :
                            <div className="flex flex-col border border-black bg-gray-500 rounded w-6/12 py-24 px-4">
                                <div className='text-white'>
                                    <span className='font-semibold text-lg'>Название: </span>
                                    <span>{prevAudio.name}</span>
                                </div>
                                <div className='text-white'>
                                    <span className='font-semibold text-lg'>Формат: </span>
                                    <span>{prevAudio.format}</span>
                                </div>
                            </div>
                        }
                    </>
                }
                <div className='justify-between flex mt-10 w-full'>
                    <button className='bg-sky-500 text-white px-3 py-2 rounded text font-medium cursor-pointer' disabled={activeStep === 0} onClick={back}>Назад</button>
                    <button className='bg-sky-500 text-white px-3 py-2 rounded text font-medium cursor-pointer' onClick={next}>Далее</button>
                </div>
           </StepDownloaing>
       </MainLayout>
    )
}

export default create
