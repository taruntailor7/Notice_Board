import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const [username,setUsername] = useState("");
    const navigate = useNavigate();
    let user = JSON.parse(sessionStorage.getItem("username")) || false ;

    useEffect(()=>{
        if(user){
            return navigate("/notices");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://notice-board-z3uw.onrender.com/auth/login",{username})
        .then((res)=>{
            if(res.data.error){
                showToastErrorMessage(res.data.message);
            } else{
                sessionStorage.setItem("username",JSON.stringify(res.data.data.username));
                showToastSuccessMessage(res.data.message);
                setTimeout(()=>{
                    navigate("/notices");
                },2000);

            }
        }).catch((err)=>console.log(err));
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Username' name="username" value={username} onChange={handleChange} required/>
                <button type="submit">Submit</button>
            </form>
            <ToastContainer />
        </div>
    )
}
