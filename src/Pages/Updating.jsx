import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Updating = () => {
  const [book , setBooks] = useState({
    title:'',
    desc:'',
    cover:'',
    price:null,
});
const navigate = useNavigate();
const location = useLocation();
const changeHandler =(e)=>{
  setBooks(prev=>({...prev,[e.target.name]:e.target.value}))
}
const bookId = location.pathname.split('/')[2];
// console.log(location.pathname.split('/')[2])
const clickhandler = async e =>{
    //   e.target.value =null;
    e.preventDefault();
    try{
       await axios.put("http://localhost:8808/books/"+bookId , book)
       navigate("/")
    }catch(err){
        console.log(err)
    }
}
  return (
    <form className='form' action="">
    <h1> update book</h1>
    <input type="text" placeholder='title'  onChange={changeHandler} name='title' />
    <input type="text" placeholder='desc' onChange={changeHandler} name='desc' />
    <input type="text" placeholder='cover' onChange={changeHandler} name='cover' />
    <input type="number" placeholder='price' onChange={changeHandler} name='price' />
    <button className='formButton' onClick={clickhandler}>update</button>
     </form>
  )
}

export default Updating

