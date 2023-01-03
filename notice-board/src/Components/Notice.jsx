/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AllNotices } from "./AllNotices";
import { AiOutlineSend } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Notice.css"

export const Notice = () => {
  const [desc, setDesc] = useState();
  const navigate = useNavigate();
  let username = JSON.parse(sessionStorage.getItem("username")) || false ;

  useEffect(()=>{
    if(!username){
      return navigate("/")
    }
  },[]);

  const showToastSuccessMessage = (msg) => {
    toast.success(msg, {
        position: toast.POSITION.TOP_CENTER
    });
  };

  const showToastErrorMessage = (msg) => {
      toast.error(msg, {
          position: toast.POSITION.TOP_CENTER
      });
  };

  const handleChange = (e) => {
    setDesc(e.target.value);
  }
  // For Creating a Notice.
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("https://notice-board-z3uw.onrender.com/notices/create",{
      desc:desc,
      username:username})
    .then((res)=>{
      showToastSuccessMessage(res.data.message);
      setDesc("");
    }) 
    .catch(()=>{
      showToastErrorMessage("Notice should be minimum of 100 characters!")
    });
  }

  return (
    <>
      <div className="notice">
        <h1>Notice Board</h1>
        <h2>Submit a notice:</h2>
        <form onSubmit={handleSubmit}>
            <textarea className='textarea' type="text" name="desc" placeholder='Enter Notice...' rows="5" value={desc} cols="100" onChange={handleChange} required/>
            <button className='submitBtn' type="submit"><AiOutlineSend fontSize="40px" color="white"/></button>
        </form>
      </div>
      <AllNotices />
      <ToastContainer />
    </>
  )
}
