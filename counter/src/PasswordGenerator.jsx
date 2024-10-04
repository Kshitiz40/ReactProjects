import React from 'react'
import { useState, useCallback,useEffect,useRef } from 'react';

function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState();

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`";

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str[char];
        };
        setPassword(pass);
    },
    [length, numberAllowed, characterAllowed, setPassword]);

    const copyPasswordToClipBoard = useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,20)
        window.navigator.clipboard.writeText(password)
    },
    [password])

    useEffect(()=>{
        passwordGenerator()
    } ,[length,numberAllowed,characterAllowed,passwordGenerator]);

    return (
        <>
            <div className='w-full max-w-md mx-auto shadow-md my-8 rounded-lg px-4 text-orange-500'>
                <h1 className='text-3xl text-center mb-10'>Password Generator</h1>
            </div>
            <div className='w-full max-w-md mx-auto bg-violet-500 rounded-3xl px-4 py-2 overflow-hidden mb-4'>
                <div className='flex gap-2'>
                    <input
                        type="text"
                        readOnly
                        value={password}
                        placeholder='Password'
                        className='outline-none py-1 px-3 w-full rounded-2xl'
                        ref={passwordRef}
                    />
                    <input
                        type="button"
                        value="Copy"
                        className='bg-blue-800 text-white px-3 py-1 rounded-lg'
                        onClick={copyPasswordToClipBoard}
                    />
                </div>
                <div className='flex text-sm gap-x-2 mt-4 mb-2'>
                    <div className='flex items-center gap-x-1'>
                        <input 
                        type="range" 
                        min={6}
                        max={20}
                        value={length}
                        className='cursor-pointer'
                        onChange={(e)=>{setLength(e.target.value)}}
                        />
                        <label>length : {length}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input 
                        type="checkbox" 
                        checked={numberAllowed}
                        onChange={()=>{setNumberAllowed((prev)=>!prev)}}
                        />
                        <label>Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                    <input 
                        type="checkbox" 
                        checked={characterAllowed}
                        onChange={(e)=>{setCharAllowed((prev)=>!prev)}}
                        />
                        <label>Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerator