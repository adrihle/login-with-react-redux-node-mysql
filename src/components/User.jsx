import React from 'react'
import { useSelector } from 'react-redux'

export default function User(){
    const upload = useSelector(state => state.upload.data)

    return (
        <div className='container text-center mt-3'>
            { upload && (
                <h2 className='text-white'>{upload}</h2>
            )}
        </div>
    )
}