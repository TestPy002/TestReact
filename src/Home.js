import React, { useContext } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Loading from './Loading';
import { MyContext } from './DayContext';
const Home = () => {
  const {info} = useContext(MyContext);
  return (
    <>
    {!info.weather && <Loading/>}
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default Home