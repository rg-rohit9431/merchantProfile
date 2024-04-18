import React, { useState } from 'react'
import { useSnackBae } from '../context/SnackBae';

import './Menucomment.css';

//components
import Comment from './Comment';

//image
import commentImage from '../assets/commentImage.png';
import notliked from '../assets/notliked.png'
import good from '../assets/good.png'
import musttry from '../assets/musttry.png';

//icons
import { IoIosCloseCircleOutline } from "react-icons/io";

const Menucomment = () => {

    const { commentVisible, setCommentVisible } = useSnackBae();
    const [newone, setNewone] = useState(false);
    const [notlikedone, setNotliked] = useState(false);
    const [goodone, setGood] = useState(false);
    const [musttryone, setMustTry] = useState(false);
    const [comment, setComment] = useState('');

    const commentHandler = (e) => {
        setComment(e.target.value);
    }

    const submitHandler = (e) => {
        console.log(comment);
    }

    return (
        <div className=' relative w-full h-0 '>
            <div
                className={`fixed bottom-0 left-[50%] translate-x-[-50%] max-w-[400px] h-[90vh] overflow-scroll hideScroller w-full comment ${commentVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <div className='relative'>
                    <IoIosCloseCircleOutline
                        onClick={() => {
                            setCommentVisible(!commentVisible);
                        }}
                        className='text-[2rem] cursor-pointer fixed right-[1rem] top-[1rem] text-[#426CFF]' />
                </div>
                <img src={commentImage} alt="commentImage" className='w-full aspect-auto object-contain' />

                <p className='font-Roboto font-[500] sm:text-[1.2rem] my-[.5rem] text-center'>Crispy chicken Burger</p>

                <div className='flex gap-[1rem] items-center my-[.5rem] px-[20px]'>
                    <div className='p-[.5rem] rounded-md flex items-center justify-start w-fit h-fit border-2  bg-white'>
                        <div className='bg-[#ED4F4F] rounded-full w-[10px] aspect-square'></div>
                    </div>
                    <p className='text-[#0F172AB2] font-Roboto font-[500]'>Category</p>
                </div>

                <p className='font-inter font-[400] text-[.9rem] text-[#64748B] text-center px-[20px]'>Analytics delivers actionable, industry-ready initiatives each time a business complete their full account.</p>

                {/* comment */}
                <div className='relative w-[90%] mx-auto h-fit shadow-md rounded-lg'>
                    <textarea
                        className='w-full h-[10rem] focus:outline-none p-[1rem]'
                        placeholder='Write your thoughts....'
                        value={comment}
                        onChange={commentHandler} />
                    <button
                        onClick={submitHandler}
                        className=' bg-[#FFD628] px-[1.4rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] absolute right-[1rem] bottom-[1rem]'>Submit</button>
                </div>

                {/* notlike,good,musttry */}
                <div className='w-full flex justify-evenly mt-[1rem]'>
                    <div className='flex flex-col items-center px-[2rem] py-[1rem] border-r-2'>
                        <p className='font-inter font-[500] text-[.9rem] sm:text-[1rem] mb-[.5rem]'>200</p>
                        <img src={notliked} alt="notliked" />
                        <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Not Liked</p>
                    </div>
                    <div className='flex flex-col items-center px-[2rem]  py-[1rem]'>
                        <p className='font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]'>200</p>
                        <img src={good} alt="good" />
                        <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Good</p>
                    </div>
                    <div className='flex flex-col items-center px-[2rem] py-[1rem] border-l-2'>
                        <p className='font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]'>200</p>
                        <img src={musttry} alt="musttry" />
                        <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Must try</p>
                    </div>
                </div>


                <div className='flex justify-evenly items-center my-[1rem]'>
                    <button
                        onClick={() => {
                            setGood(false);
                            setNewone(!newone);
                            setNotliked(false);
                            setMustTry(false);
                        }}
                        className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>New</button>
                    <button
                        onClick={() => {
                            setGood(false);
                            setNewone(false);
                            setNotliked(!notlikedone);
                            setMustTry(false);
                        }}
                        className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Not Liked</button>
                    <button
                        onClick={() => {
                            setGood(!goodone);
                            setNewone(false);
                            setNotliked(false);
                            setMustTry(false);
                        }}
                        className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Good</button>
                    <button
                        onClick={() => {
                            setGood(false);
                            setNewone(false);
                            setNotliked(false);
                            setMustTry(!musttryone);
                        }}
                        className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Must try</button>
                </div>

                
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>

            </div>
        </div>
    )
}

export default Menucomment