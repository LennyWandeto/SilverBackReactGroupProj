import React from 'react';
import './footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-icons">
      <a href = "https://www.youtube.com/@Netflix" target= "_blank"><img src={youtube_icon} alt=""/></a> 
        <a href= "https://www.instagram.com/netflix?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><img src={instagram_icon} alt=""/> </a>
        <a href = 'https://twitter.com/netflix' target = '_blank'><img src={twitter_icon} alt=""/> </a>
        <a href = 'https://www.facebook.com/netflixke' target = '_blank'><img src={facebook_icon} alt=""/> </a>
       </div>
       <ul>
        <li>Contact Us</li>
        <li>Bro yk this web is good</li>
        <li>Meet the Grahams</li>
        <li>Lol</li>
       </ul>
       <p className="copyright-text">This Project is Licensed by Kaarshe, Mercy, Cheryl and Lenny!™ 2024</p>
    </div>
  )
}

export default Footer