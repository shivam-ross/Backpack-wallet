

import logo from '/home/hunter/Desktop/backpack-clone/src/assets/image.png'
import { useNavigate } from 'react-router-dom'


export const FirstPage = () => {
    const navigate = useNavigate();

    return(
        
        <div className='h-screen bg-black flex flex-col gap-6  justify-center items-center text-white'>
        <div className='scontainer flex mb-10 flex-col justify-center items-center'>
            <img src={logo} width={180}/>
            <h1 className='text-4xl font-bold'>Welcome to Backpack</h1>
            <p className='text-gray-400 mb-12'>Let's get started</p>
            <div className='btns flex mt-10 flex-col justify-center items-center'>
            <button  className='bg-white mb-1 font-medium rounded-lg hover:bg-gray-200 px-8 py-2 text-black' onClick={() => { navigate("/warning");}}>Create a new wallet</button>
            <button className='bg-gray-700 mt-1 w-full font-medium rounded-lg hover:bg-gray-800 px-8 py-2 text-white' onClick={() => {navigate("/import-wallet");}}>Import wallet</button>
            </div>
        </div>
        </div>
       
       
    )
}