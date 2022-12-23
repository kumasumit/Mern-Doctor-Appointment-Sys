import React,{useEffect} from 'react';
import axios from 'axios';


const HomePage = () => {
  //login user data
  const getUserData = async(req, res) =>{
     try {
       await axios.post("/api/v1/user/getUserData", {}, {
        headers:{
          Authorization: 'Bearer ' + localStorage.getItem('token')          
        },
       })
     } catch (error) {
      console.log(error);
     }
  } 
  //the getUserData will be called , every time the HomePage mounts or the HomePage is rendered
  useEffect(()=>{
    getUserData()
  },[])
  return (
    <div><h1>HomePage</h1></div>
  )
}

export default HomePage