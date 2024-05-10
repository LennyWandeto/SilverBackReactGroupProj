import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './pages/Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Player from './pages/Player/Player'
import Banner from './pages/Player/Banner'
import Search from './components/SearchBar/Search'


 const App = () => {

  const navigate = useNavigate();

   useEffect(()=>{
      onAuthStateChanged(auth, async(user)=>{
        if(user){
          console.log("Logged In!");
          navigate('/')
        }else{
          console.log("Not Logged In!");
          navigate('/login')
        }
      })
   },[])

  return (
    <div>
      <ToastContainer theme="dark"/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/player/:id" element={<Player />} />
        <Route path="/banner" element = {<Banner />} />
        <Route path="/search" element = {<Search/>}/>

      </Routes>
      
      </div>
  )
}

export default App