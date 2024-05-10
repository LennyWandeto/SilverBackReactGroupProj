import React, {useEffect, useState} from 'react'
import './navbar.css'
import logo from '../../assets/cards/MORINGA_FLIX-removebg-preview.png'
import search_icon from '../../assets/search_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import {logout} from '../../firebase'
import { db } from '../../firebase'
import { DocumentReference, collection, doc, getDoc, query, where } from 'firebase/firestore'
import { Link } from 'react-router-dom'



const Navbar = ({email}) => {
  const [names, setNames] = useState("Children");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "user");
        const q = query(colRef, where("email", "==", email));
        console.log(q)
        const docSnap = await getDoc(q);
        setNames(docSnap.data().name);
        
      } catch (error) {
        console.log(error);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  console.log(names)

return (
    <div className='navbar'>
      <div className="navbar-left">
         <img style ={{height:"100px", width: "250px"}} src={logo} alt=""/>
         <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
         </ul>
      </div>
      <div className="navbar-right">
      <Link to={'/search'}><img src={search_icon} alt="" className='icons' /></Link>
        <p>{names}</p>
        <div className="navbar-profile">
        <img src={profile_img} alt="" className='profile'/>
        <img src={caret_icon} alt="" />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out of MoringaFlix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar