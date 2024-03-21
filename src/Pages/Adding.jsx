import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Adding = () => {
    const [book , setBooks] = useState({
        title:'',
        desc:'',
        cover:'',
        price:null,
    });
    const navigate = useNavigate();
    const changeHandler =(e)=>{
   setBooks(prev=>({...prev,[e.target.name]:e.target.value}))
//    console.log(book)
    }
    const clickhandler = async e =>{
        //   e.target.value =null;
        e.preventDefault();
        try{
           await axios.post('http://localhost:8808/books',book)
           navigate("/")
        }catch(err){
            console.log(err)
        }
    }
  return (
    <>
     <form className='form' action="">
    <h1> Add new book</h1>
    <input type="text" placeholder='title'  onChange={changeHandler} name='title' />
    <input type="text" placeholder='desc' onChange={changeHandler} name='desc' />
    <input type="img" placeholder='cover' onChange={changeHandler} name='cover' />
    <input type="number" placeholder='price' onChange={changeHandler} name='price' />
    <button onClick={clickhandler}>Add</button>
     </form>

    </>
  )
}

export default Adding;
