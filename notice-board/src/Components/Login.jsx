/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"

export const Login = () => {
    const [username,setUsername] = useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    let user = JSON.parse(sessionStorage.getItem("username")) || false ;

    useEffect(()=>{
        if(user){
            return navigate("/notices");
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
        setUsername(e.target.value);
    }
    // For Login.
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        axios.post("https://notice-board-z3uw.onrender.com/auth/login",{username})
        .then((res)=>{
            if(res.data.error){
                showToastErrorMessage(res.data.message);
                setLoading(false);
            } else{
                sessionStorage.setItem("username",JSON.stringify(res.data.data.username));
                showToastSuccessMessage(res.data.message);
                setTimeout(()=>{
                    navigate("/notices");
                    setLoading(false);
                },1500);
            }
        }).catch((err)=>console.log(err));
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h2>Pick a username</h2>
                <input className='username' type="text" placeholder='Enter Username' name="username" value={username} onChange={handleChange} required/>
                {loading ? <img className="loadingImg" src="https://media.tenor.com/aK9YaZum7RkAAAAC/excited-loading.gif" alt="loader"/> :<button className='loginBtn' type="submit">Login</button>}
            </form>
            <ToastContainer />
        </div>
    )
}
