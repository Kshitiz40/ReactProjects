import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Kshitiz40')
    //         .then((res) => res.json())
    //         .then(data => {
    //             setData(data);
    //         })
    // }
    //     , [])

    return (
        <div className='text-center m-4 p-4 bg-gray-600 text-white w-[50%] mx-auto'>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="profile_picture" width="300px"/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/Kshitiz40")
    return response.json();
}