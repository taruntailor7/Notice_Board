import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import "./AllNotices.css"

export const AllNotices = ({handleState}) => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getAllNotices();
  },[handleState]);

  // For All Notices.
  const getAllNotices = ()=>{
    setLoading(true);
    axios.get("https://notice-board-z3uw.onrender.com/notices")
    .then((res)=>setNotices(res.data.data.reverse()))
    .catch((err)=>console.log(err));
    setLoading(false);
  }

  if(loading){
    return <img style={{display:"flex", margin:"auto", marginTop:"140px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading" />
  }

  return (
    <div className='allNotices'>
       {notices.map((notice)=>(
          <div key={notice._id}>
            <p>{notice.desc}</p>
            <div className='noticeDetails'>
              <p>{notice.username}</p>
              <p>{new Date(notice.createdAt).toDateString()} {new Date(notice.createdAt).toLocaleTimeString()}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
