import React, { useRef, useState } from 'react'

interface FileUploadProps {
    setFile: Function;
    accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setFile(e.target.files[0])
    }
    
    return (
        <div className='flex justify-center m-auto' onClick={() => ref.current.click()}>
            <input 
                type='file'
                accept={accept}
                className='hidden'
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    )
}

export default FileUpload
