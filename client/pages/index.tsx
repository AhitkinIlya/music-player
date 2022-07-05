import React from 'react'
import Navbar from '../components/Navbar'
import MainLayout from '../layout/MainLayout'

const Index = () => {
    return (
        <>
            <MainLayout>
                <div className='flex justify-center items-center flex-col'>
                    <h1>Добро пожаловать!</h1>
                    <h3>Здесь собраны лучшие трэки</h3>
                </div>
            </MainLayout>
        </>
    )
}

export default Index
