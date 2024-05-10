import React from 'react'
 import { useNavigate } from 'react-router-dom'
import back_arrow_icon from '../../assets/back_arrow_icon.png';

function Banner() {
    const navigate = useNavigate ()
  return (
    <div>
        <div className="player">
      <img src={back_arrow_icon} alt='' onClick = {()=> navigate (-1)}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/80dqOwAOhbo?si=oqt8sWyBhhMd9c1q`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p>2020-04-02</p>
        <p>Official Trailer</p>
        <p>Trailer</p>
      </div>
    </div>
    </div>
  )
}

export default Banner