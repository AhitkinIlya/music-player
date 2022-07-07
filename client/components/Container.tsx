import React from 'react'

const Container: React.FC = ({children}) => {
    return (
        <div className='flex py-10 px-9 justify-center items-center flex-col'>
            {children}
        </div>
    )
}

export default Container
