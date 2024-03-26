import React, { useState, useEffect, useCallback } from 'react';

export default function passwordGenerator() {

    const [length, setLength] = useState(8);
    const [charValue, setCharValue] = useState(false);
    const [numValue, setNumValue] = useState(false);
    const [password, setPassword] = useState();

    const passwordGenerator = useCallback(()=>{
        let pass=""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numValue) str += "1234567890"
        if (charValue) str += "!@#$%^&*()_-/'~`.\|{}[]"

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)

    },  [length, charValue, numValue, setPassword])

    useEffect( () => {
        passwordGenerator()
    }, [length, charValue, numValue, setPassword]

    )
    

  return (
    <div>
        <h1 className='text-3xl text-center my-5'>Password Generator</h1>
        <div className=' w-80 mx-auto'>
            <label for="hs-trailing-button-add-on" className="sr-only">Label</label>
            <div className="flex rounded-lg shadow-sm">
                <input type="text" value={password} className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
                <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Copy
                </button>
            </div>
        </div>
        <div className="slidecontainer w-80 mx-auto my-10">
            <input id="minmax-range" type="range" min="0" max="50" value={length} onChange={(e) => {setLength(e.target.value)}} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            <label>Length: {length}</label>
        </div>
        <div className="flex items-center w-80 mx-auto my-10">
            <input id="checked-checkbox" type="checkbox" defaultChecked={charValue} value={charValue} onChange={()=> {setCharValue((prev) => !prev)}} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 me-5">Character</label>
            <input id="checked-checkbox" type="checkbox" defaultChecked={numValue} value={numValue} onChange={()=> {setNumValue((prev) => !prev)}} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Number</label>
        </div>
        
    </div>
  )
}
