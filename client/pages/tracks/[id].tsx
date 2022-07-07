import React from 'react'
import { ITrack } from '../../types/track'
import MainLayout from '../../layout/MainLayout'
import { useRouter } from '../../node_modules/next/router'
import ArrowLeft from '../../components/icons/ArrowLeft'

const Track = () => {
    const track: ITrack = {
        _id: '1', 
        name: 'Трек 1', 
        artist: 'lil pump', 
        text: 'essketit', 
        listens: 100, 
        audio: 'http://localhost:5000/audio/e57edca6-8399-42c2-aabe-5dd6eb89a8e7.mp3', 
        picture: 'http://localhost:5000/image/6932f20c-cc98-4201-8abd-97e7ce07e742.jpg',
        comments: []
    }

    const router = useRouter()

    return (
        <MainLayout>
            <div className='container flex flex-col items-start'>
                <div  className='flex text-3xl font-medium cursor-pointer' onClick={() => router.push('/tracks')}>
                    <ArrowLeft />
                    <div 
                        className='text-xl text-gray-500'
                    >
                        к списку
                    </div>
                </div>
                <div className='container my-20 flex'>
                    <div className='border rounded border-gray-700'>
                        <img className='rounded' src={track.picture} width={200} height={200} />
                    </div>
                    <div className='ml-7 flex flex-col justify-between'>
                        <h1 className='text-xl font-medium'>Назвине трека - {track.name}</h1>
                        <h1 className='text-xl font-medium'>Исполнитель - {track.artist}</h1>
                        <h1 className='text-xl font-medium'>Прослушиваний - {track.listens}</h1>
                    </div>
                </div>
                <h1 className='text-2xl font-medium'>Текст трека</h1>
                <p>{track.text}</p>
                <div className='container flex flex-col items-start'>
                    <h1>Комментарии</h1>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ваше имя</label>
                        <div className="mt-1 relative rounded-md border-lime-700">
                            <input 
                                type="text" 
                                name="name" 
                                id="name"
                                className="focus-visible:border-red-500 focus-visible:border-red-500 focus:border-red-500 focus:border-red-500 block w-full pl-2 py-3 rounded-md" placeholder="Илья" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Ваш комментарий</label>
                        <div className="mt-1 relative rounded-md border-lime-700">
                            <textarea 
                                name="comment" 
                                id="comment"
                                className="focus-visible:border-red-500 focus-visible:border-red-500 focus:border-red-500 focus:border-red-500 block w-full pl-2 py-3 rounded-md" placeholder="Какой классный трек!" />
                        </div>
                    </div>
                    <button className='bg-blue-700 text-white px-3 py-2 rounded text font-medium cursor-pointer'>
                        Отправить
                    </button>
                </div>
                <div>
                    {track.comments.map(comment => (
                        <div key={comment._id}>
                            <div>Автор - {comment.username}</div>
                            <div>Комментарий - {comment.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}

export default Track
