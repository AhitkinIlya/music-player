import React from 'react'

const Container: React.FC = ({children}) => {
    return (
        <div className='flex py-10 px-9'>
            {children}
        </div>
    )
}

export default Container
