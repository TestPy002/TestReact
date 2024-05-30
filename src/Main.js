import React, { useContext } from 'react'
import Weather from './Weather'
import { MyContext } from './DayContext'
import { useState } from 'react';
const Main = () => {
  const {info} = useContext(MyContext);
  let url;
  if(info.isDay){
    url='https://c.tadst.com/gfx/1200x630/sunrise.png?1';
  }
  else{
    url='https://t4.ftcdn.net/jpg/02/44/74/51/360_F_244745114_mK5n4nO4sAbJph8cdTrMT75uhetthlwJ.jpg';
  }
  return (
    <div style={{backgroundImage:`url(${url})`}} className={`w-full h-screen bg-cover flex justify-center items-center md:h-screen`}>
        <Weather/>
    </div>
  )
}
export default Main
