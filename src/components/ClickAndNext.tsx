import { useState } from "react";

export const ClickAndNext = ({label, onClick}) => {
    const [value, setValue] = useState(false);
    return<div>
     <div className="flex items-center mb-6 w-full max-w-md mx-4 md:mx-0">
   
    <input  className='mr-3 h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 rounded' type="checkbox" checked={value} onChange={() => {setValue(!value)}}/>
    

    <p className='text-gray-200 text-sm md:text-base lg:text-lg'>{label}</p>
    </div>

    <div>

    <button  className={(!value) ?'w-1/4 sm:w-1/3 md:w-1/2  h-12 lg:w-full py-2 px-4 rounded-md text-black bg-gray-600 cursor-not-allowed' : 'w-1/4 sm:w-1/3 md:w-1/2  h-12 lg:w-full py-2 px-4 rounded-md text-black bg-white hover:bg-gray-200'} disabled= {!value} onClick={onClick}>Next</button>
    </div>
    </div>
    }