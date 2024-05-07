import React, {useEffect, useRef} from 'react'
import './titlecards.css'
import  cards_data from'../../assets/cards/Cards_data'



const Titlecards = ({title, category}) => {
  const cardsRef = useRef();
  
  const handleWheel = (event) =>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=>{
    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])
  return (
    <div clasName='title-cards'>
      <h2>{title?title:"Popular on Moringa Flix!"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index)=>{
          return<div className="card" key={index}>
            <img src={card.image} alt=''/>
            <p>{card.name}</p>
           </div>
         
        })}
      </div>
    </div>
  )
}

export default Titlecards