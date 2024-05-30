import React, { useContext,useEffect,useState } from 'react'
import Data from './Data'
import Gallery from './Gallery'
import { MyContext } from './DayContext'
const Weather = () => {
  const {info} = useContext(MyContext);
    let url='';
    if(info.weather==='Clear'){
      url='https://media.istockphoto.com/id/1430537932/photo/blue-sky-with-white-clouds.webp?b=1&s=170667a&w=0&k=20&c=h9jXcgHg0keOp2OnI-hkJhsAEAEewKNediKrg-s97a8='
    }
    else if(info.weather==='Rain'){
        url='';
    }
    else if(info.weather==='Haze'){
        url='';
    }
    else if(info.weather==='Thunderstorm'){
        url='';
    }
    else if(info.weather==='Drizzle'){
        url='';
    }
    else if(info.weather==='Snow'){
        url='';
    }
    else if(info.weather==='Mist'){
        url='';
    }
    else if(info.weather==='Dust'){
        url='';
    }
    else if(info.weather==='Fog'){
        url='';
    }
    else if(info.weather==='Sand'){
        url='';
    }
    else if(info.weather==='Tornado'){
        url='';
    }
    else if(info.weather==='Clouds'){
        url='';
    }
    else if(info.weather==='Ash'){
        url='';
    }
    else if(info.weather==='Squall'){
        url='';
    }
  return (
    <>
    { info.weather?
    <div style={{backgroundImage:`url(${url})`}} className={`flex w-4/5 h-4/5 bg-slate-500 bg-cover flex-col gap-6 justify-center items-center md:flex-row md:gap-0 md:h-3/5`}>
    <Data/>
    <Gallery/>
    </div>:
     <div className={`flex w-4/5 h-4/5 bg-${info.weather} bg-cover flex-col gap-6 justify-center items-center md:flex-row md:gap-0 md:h-3/5`}>
     <Data/>
     <Gallery/>
     </div>
    }
    </>
  )
}
export default Weather