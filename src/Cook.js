import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from './DayContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
const Cook = () => {
  const {info} =  useContext(MyContext);
  const [query, setquery] = useState(null);
  const [cook, setcook] = useState(null);
  let food;
  let recipes;
  useEffect(() => {
    if(info.temperature){
      console.log(info.temperature);
    const fetchdata = async ()=>{
      if(info.weather==='Rain'||info.weather==='Drizzle'||info.weather==='Thunderstorm'){
        //setquery('pasta')
        food = 'pasta';
      }
      else if(info.temperature<15)
        {
          //setquery('soup');
          food='soup';
        }
      else if(info.temperature > 25)
        {
          //setquery('smoothie');
          food = 'smoothie';
        }
      else
      {
        console.log(info.temperature);
        //setquery('sandwitch');
        food='sandwitch';
      }
      try{
        const api = 'c7afd246b901671302392a301c1ae58d';
      const response = await axios.get(`https://api.edamam.com/search?q=${food}&app_id=bdea33e8&app_key=${api}`);
      recipes = await response.data;
      console.log(response.data);
      console.log(recipes.hits[0].recipe);
      console.log(recipes.hits[0].recipe.image);
      setcook(recipes.hits);
    }
    catch(err){
      console.log(err.message);
    }
  };
  fetchdata();
  }
  }, [info.temperature])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
  };
  return (
    <div className='h-96 w-full bg-violet-500 flex flex-col md:w-9/12 md:h-full'>
      <div className='h-1/6 w-full text-4xl'>Recipes</div>
        <div className='w-full h-auto'>
      <Slider  {...settings}>
        { cook &&
          cook.map((cook,index) => (
          <a key={index} href={cook.recipe.url}><img style={{objectFit:'cover', objectPosition:'center'}} src={cook.recipe.image} alt={cook.recipe.label} className={'h-52 text-right'}/><p>{cook.recipe.label}</p></a>
          //<div key={index} style={{backgroundImage:`url('https://t4.ftcdn.net/jpg/02/10/84/39/360_F_210843915_M2cjFr8RQzuaMtfrCnymHSG5jg68CufP.jpg')`}} className='h-60 bg-cover bg-center md:h-56'>{cook.recipe.label}</div>
        ))
        }
        
      </Slider>
        </div>
    </div>
  )
}

export default Cook