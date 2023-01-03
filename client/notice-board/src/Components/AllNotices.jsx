import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export const AllNotices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(()=>{
    getAllNotices();
  },[notices]);

  const getAllNotices = ()=>{
    axios.get("https://notice-board-z3uw.onrender.com/notices")
    .then((res)=>setNotices(res.data.data.reverse()))
    .catch((err)=>console.log(err));
  }

  return (
    <div>
       {notices.map((notice)=>(
          <div key={notice._id}>
            <p>{notice.desc}</p>
            <p>{notice.username}</p>
            <p>{new Date(notice.createdAt).toDateString()}</p>
            <p>{new Date(notice.createdAt).toLocaleTimeString()}</p>
          </div>
        ))}
    </div>
  )
}
