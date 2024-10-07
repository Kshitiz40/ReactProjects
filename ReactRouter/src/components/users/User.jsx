import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams();
  return (
    <div className='bg-gray-600 p-4 text-3xl w-[50%] mx-auto text-white'>
        <h3 className='text-center'>
            User : {userId}
        </h3>
    </div>
  )
}

export default User