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
                localStorage.setItem("username",JSON.stringify(res.data.data.username))
                alert(res.data.message)
            });
            navigate("/notices");
        } catch (error) {
            console.log(error,"errrr");
            // alert("Please enter alphanumeric username only!")
            // console.log(error.response.data.errors.username.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Username' name="username" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
