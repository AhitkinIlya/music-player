import React from 'react'
import MainLayout from '../../layout/MainLayout'
import { useRouter } from '../../node_modules/next/router'
import { ITrack } from '../../types/track'
import TrackList from '../../components/TrackList'

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] =[
        {
            _id: '1', 
            name: 'Трек 1', 
            artist: 'lil pump', 
            text: 'essketit', 
            listens: 100, 
            audio: 'http://localhost:5000/audio/e57edca6-8399-42c2-aabe-5dd6eb89a8e7.mp3', 
            picture: 'http://localhost:5000/image/6932f20c-cc98-4201-8abd-97e7ce07e742.jpg',
            comments: []
        }
    ]

    return (
        <MainLayout>
            <div className='container justify-center'>
                <div className='w-900 shadow-[0_2px_7px_-2px_rgb(0,0,0,0.3)] rounded'>
                    <div className='p-12'>
                        <div className='container flex justify-between'>
                            <h1 className='text-5xl font-semibold'>Список треков</h1>
                            <button 
                                onClick={() => router.push('/tracks/create')} 
                                className='bg-cyan-500 text-white px-3 py-2 rounded text font-medium cursor-pointer hover:shadow-[0_0px_13px_1px_rgb(0,0,0,0.2)]'
                            >
                                    Загрузить
                            </button>
                        </div>
                    </div>
                    <TrackList tracks={tracks} />
                </div>
            </div>
        </MainLayout>
    )
}

export default Index
