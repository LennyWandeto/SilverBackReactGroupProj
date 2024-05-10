import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/navbar.jsx'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/titlecards/titlecards.jsx'
import Footer from '../../components/footer/footer.jsx'
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt='' className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt='' className='caption-img'/>
          <p>Drake has a BBL lol😂</p>
          <div className="hero-btns">
            <Link to = {'/banner'}className='btn'><img src={play_icon} alt=''/>Play</Link>
           
          </div>
          
          <Titlecards/>
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"BlockBuster Movies!"} category={"popular"}/>
        <Titlecards title={"New on MoringaFlix!"} category="top_rated"/>
        <Titlecards title={"Rising Trends!"} category={"upcoming"}/>
        <Titlecards title={"We think you'll love this!"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home