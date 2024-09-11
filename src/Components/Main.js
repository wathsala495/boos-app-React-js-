import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import bg from "./../images/bg2 .png"
import './style.css';
import Card from './Card';
import axios from 'axios';

export default function Main() {
  const [serach,setSearch]=useState("");
  const [bookData,setData]=useState([])
  const serachBook=(evt)=>{
     if(evt.key==="Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+serach + '&key=AIzaSyCBJn7nvl2AvLxR_fcj5sR1E7sxkFYlf1o'+'&maxResults=40')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err))
     }
  }
  return (
    <div>
      <div className='header'>
        <div className='row1'>
            <h1>A room without books is like <br/>a body without a soul</h1>
        </div>
        <div className='row2'>
            <h2>Find Your Book</h2>
            <div className='search'>
                <input type='text' placeholder='Enter Your Book Name' onChange={(e)=>setSearch(e.target.value)} value={serach} onKeyUp={serachBook}/>
                <button><FaSearch/></button>
            </div>
            <img src={bg}/>
        </div>
      </div>
      <div className='container'>
     { 
     
        <Card book={bookData}/>
  
      
     }
     
     
     
      </div>
    </div>
  )
}
