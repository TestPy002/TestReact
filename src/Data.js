import React, { useContext,useEffect } from 'react'
import { MyContext } from './DayContext'
import Climate from './Climate';
import axios from 'axios';
const Data = () => {
  const {info,updatelocation} = useContext(MyContext);
  useEffect(() => {
    if(!info.location){
    const fetchdata = async ()=>{
      try{
        const api='f8f086f2e97b41bbbc9008890d09709e';
      const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${api}`);
      const location = await response.data;
      //setinfo({...info,location:location.city})
      updatelocation(location.city);
      console.log(location.city);
      }
      catch(err){
        console.log(err.message);
      }
    };
    fetchdata();
  }
  }, [])
  
  return (
    <div className='h-full w-full '>
        {info.location && <><p>hello-{info.location}</p><Climate value={info.location} /></>}
        
    </div>
  )
}

export default Data