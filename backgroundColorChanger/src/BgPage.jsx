import React, { useState } from 'react'

function BgPage() {

    const [color, setColor] = useState("olive")
    const Red = ()=>{
        setColor("Red");
    }
    const orange = ()=>{
        setColor("orange");
    }
    const amber = ()=>{
        setColor("#222878");
    }
    const lime = ()=>{
        setColor("lime");
    }
    const slate = ()=>{
        setColor("#999999");
    }
    const emerald = ()=>{
        setColor("violet");
    }
    return (

        <div className='w-full h-screen text-white duration-200 flex flex-wrap justify-center' style={{ backgroundColor: color }}>
            <div className="fixed bottom-0 mb-10 h-[50px] bg-slate-600 px-4 py-3 rounded-3xl flex gap-4 w-fit justify-center ">
                <button onClick={Red} className="bg-red-700 px-3 w-20 rounded-xl">Red</button>
                <button onClick={orange} className="bg-orange-600 px-3 w-20 rounded-xl">Orange</button>
                <button onClick={amber} className="bg-blue-500 px-3 w-20 rounded-xl">Blue</button>
                <button onClick={lime} className="bg-lime-600 px-3 w-20 rounded-xl">Lime</button>
                <button onClick={slate} className="bg-slate-900 px-3 w-20 rounded-xl">Slate</button>
                <button onClick={emerald} className="bg-violet-400 px-3 w-20 rounded-xl">Violet</button>
            </div>
        </div>

    )
}

export default BgPage