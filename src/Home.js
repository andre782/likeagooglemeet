import React from 'react';
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import conf from "../src/aset/black.jpg"
import Navbar from './Navbar';

const Home =()=> {
    const {RoomCode,setRoomCode} = useState ("");

    const navigate = useNavigate();

    const submitCode = (e) => {
        e.preventDefault();
        navigate(`/room/${RoomCode}`)
    }


  return (
    <div className='relative h-screen'>
      {/* Navbar */}
      <Navbar/>
      {/* Hero */}
      <div className='relative mt-0' >
        {/* image */}
        <div className='absolute max-h-[35rem] w-full flex overflow-hidden'>
          <img src={conf} className=" object-cover w-full h-full fixed"/>
        
      </div>
{/* hero info */}
   
    <div className='relative z-10 px-6 md:max-w-[90vw] mx-auto'>
      <div className='pb-8'>
        <h1 className='text-[46px] md:text-[65px] text-white text-center font-bold pt-10'>Video chat app</h1>
        <p className='text-[27px] text-white -mt-2 text-center'>with zegocloud</p>
      </div>
        <form onSubmit={submitCode} className="flex flex-col items-center justify-center text-white md:pt-12">
      <label htmlFor="" className=" font-bold text-[27px] md:text-[20x]">enter the room code</label> <br/>
      <input type="text" required placeholder="Enter Room Code" value={RoomCode}
       onChange={(e) => setRoomCode (e.target.value)} className="bg-gray-500 placeholder:text-white py-2 w-[16rem] 
       rounded-full pl-8 mt-2 outline-0"/>
      <button type='submit' className='mt-4 bg-orange-500 rounded-[0.5rem] py-1.5 px-4 hover:bg-orange-400 duration-100 ease-out'>Enter room</button>

        </form>
      </div>
      </div>
      </div>
  )
}

export default Home;
