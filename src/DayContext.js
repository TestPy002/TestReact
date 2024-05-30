import React, { createContext, useState } from 'react';
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const data={isDay:false, location:null, temperature:null, weather:null};
  const [info, setinfo] = useState(data);
  const updatelocation = (value)=>{
    setinfo({...info, location:value});
  }
  const updateClimate = (value)=>{
    const currentTime = new Date().getTime() / 1000;
    let day = value.sys.sunset>currentTime;
    setinfo({...info, weather:value.weather[0].main, temperature:value.main.temp, isDay:day});
  }
  //console.log(info.weather);
  const value={info,updatelocation,updateClimate};
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
