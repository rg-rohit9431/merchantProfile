import React from 'react'
import { useNavigate } from 'react-router-dom';


//image
import logo from '../assets/logo.png';

const MerchantNavbar = () => {
    const navigate = useNavigate();


    return (
        <div className='relative bg-white  z-[1000] w-full h-[70px] flex justify-between items-center px-[1rem]'>
            {/* logo */}
            <img
                onClick={
                    () => {
                        navigate('/');
                    }
                }
                src={logo}
                alt='logo'
                className='h-full aspect-auto p-[.5rem] cursor-pointer' />
            <button className='sm:ml-[2rem] bg-[#FFD628] px-[1.4rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Login</button>
        </div>
    )
}

export default MerchantNavbar