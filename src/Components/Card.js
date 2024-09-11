import React ,{useState}from 'react'
import book from './../images/book .jpg'
import Modal from './Modal';

export default function Card({book}) {

  const [show,setShow]=useState(false);
    const [item,setItem]=useState();
  console.log("book"+ JSON.stringify(book))
  return (
  
  <>
  {
    book.map((item)=>{
      let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
      let amount = item.saleInfo.saleability ;
      let title=item.volumeInfo.title
      if(thumbnail!=undefined ){
        return(<>
          <div className='card' onClick={()=>{setShow(true);setItem(item)}}>
      <img src={thumbnail} alt=''/>
      <div className='bottom'>
        <p>{book.id}</p>
           <h3 className='title'>{title}</h3>
           <p className='amount'>&#8377;{amount}</p>
           
      </div>
    </div>
     <Modal show={show} item={item}/>
     </>
        )
      }
      
    })
  }
 
  
  </>
  )
}

