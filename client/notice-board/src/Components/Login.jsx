import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

export const Login = () => {
    const [username,setUsername] = useState("");
    const navigate = useNavigate();

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
                    localStorage.setItem("username",JSON.stringify(res.data.data.username))
                    alert(res.data.message);
                    navigate("/notices");
                }
            });
        } catch (error) {
            console.log(error,"errrr");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Username' name="username" value={username} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
