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
  const [loading, setLoading] = useState(false);
  const [handleState, setHandleState] = useState(0);
  const navigate = useNavigate();
  let username = JSON.parse(sessionStorage.getItem("username")) || false ;

  useEffect(()=>{
    if(!username){
      return navigate("/");
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
    setLoading(true);
    axios.post("https://notice-board-z3uw.onrender.com/notices/create",{
      desc:desc,
      username:username})
    .then((res)=>{
      showToastSuccessMessage(res.data.message);
      setDesc("");
      setHandleState(prev=>prev+1);
      setLoading(false);
    }) 
    .catch(()=>{
      showToastErrorMessage("Notice should be minimum of 100 characters!")
      setLoading(false);
    });
  }

  return (
    <>
      <div className="notice">
        <h1>Notice Board</h1>
        <h2>Submit a notice:</h2>
        <form onSubmit={handleSubmit}>
            <textarea className='textarea' type="text" name="desc" placeholder='Enter Notice...' rows="5" value={desc} cols="100" onChange={handleChange} required/>
            <div className='submitBtn'>
            { loading ? <img className="loading" src="https://media.tenor.com/aK9YaZum7RkAAAAC/excited-loading.gif" alt="loader"/> : <button type="submit"><AiOutlineSend fontSize="40px" color="white"/></button>}
            </div>
        </form>
      </div>
      <AllNotices handleState={handleState} />
      <ToastContainer />
    </>
  )
}
