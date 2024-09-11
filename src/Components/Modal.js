import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import book from './../images/book .jpg'
import './style.css';

export default function Modal({show,item}) {
    if(!show){
        return null
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div>
      <div className='overlay'>
        <div className='overlay-inner'>
            <button className='close'><IoClose/></button>
            <div className='inner-box'>
                <img src={thumbnail} alt=''/>
                <div className='info'>
                    <h1>{item.volumeInfo.title}</h1>
                    <h3>{item.volumeInfo.authors}</h3>
                    <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4>
                    <a href={item.volumeInfo.previewLink}><button>More</button></a>
                </div>
            </div><h4 className='description'>{item.volumeInfo.description}
            </h4>
          

        </div>
      </div>
    </div>
  )
}
