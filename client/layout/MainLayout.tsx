import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Player from '../components/Player'

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Navbar />
            <Container>
                {children}
            </Container>
            <Player />
        </>
    )
}

export default MainLayout
