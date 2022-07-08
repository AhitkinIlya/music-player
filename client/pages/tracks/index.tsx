import React, { useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import { useRouter } from '../../node_modules/next/router'
import TrackList from '../../components/TrackList'
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { fetchTracks } from './../../store/actions-creators/track';
import { NextThunkDispatch, wrapper } from '../../store/index'
import { useDispatch } from 'react-redux';

const Index = () => {
    const router = useRouter()
    const { tracks, error } = useTypedSelector(state => state.track)
    const [ query, setQuery ] = useState<string>('')
    const dispatch = useDispatch() as NextThunkDispatch
    const [ timer, setTimer ] = useState(null)

    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(setTimeout(async () => {
            await dispatch(await fetchTracks(e.target.value))
        }, 500))
    }

    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }

    return (
        <MainLayout title={'Список треков - музылькая площадка'}>
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
                    <input
                        value={query}
                        onChange={search}
                    />
                    <TrackList tracks={tracks} />
                </div>
            </div>
        </MainLayout>
    )
}

export default Index

export const getServerSideProps = wrapper.getServerSideProps(( store ) => async ({ req }) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks(''))
})
