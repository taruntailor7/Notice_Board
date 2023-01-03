import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

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

    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        try {
            axios.post("https://notice-board-z3uw.onrender.com/auth/login",{username})
            .then((res)=>{
                if(res.data.error){
                    alert(res.data.message);
                } else{
                    sessionStorage.setItem("username",JSON.stringify(res.data.data.username))
                    alert(res.data.message);
                    navigate("/notices");
                }
            }).catch((err)=>console.log(err));
        } catch (error) {
            console.log(error,"error");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Username' name="username" value={username} onChange={handleChange} required/>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
