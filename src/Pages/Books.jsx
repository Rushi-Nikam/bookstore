import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Books = () => {
 const [books,setBooks] =  useState([]);
 useEffect(()=>{
 const fecthAllBooks = async()=>{
    try{
       const res = await axios.get("http://localhost:8808/books");
       setBooks(res.data)
       console.log(res.data)
    }catch(err){

    }
 }
 fecthAllBooks();
 },[])
 const deleteHandler = async (id) =>{
try{
await axios.delete("http://localhost:8808/books/"+id);
window.location.reload();
}catch(err){
console.log(err)
}

 }
//  const updateHandler = async (id) =>{
// try{
// await axios.
// window.location.reload();
// }catch(err){
// console.log(err)
// }
//  }
  return (
    <>
 <h1>Bookstore</h1>
  <div className='books' >
    {books.map(book =>(
            <div className='book' key={book.id}>
               {book.cover && <img src={book.cover} alt="" />}
              <h1>{book.title}</h1> 
             <p>{book.desc}</p> 
             <span>{book.price}</span> 
             <button className='delete'onClick={(id)=>deleteHandler(book.id)}>delete</button>
             <button className='update'><Link to={`/Updating/${book.id}`}>update</Link></button>
            </div>
    ))
    }
  </div>
  <button><Link to="/Adding">Add</Link></button>
    </>
  )
}

export default Books;
