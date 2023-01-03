// import React, { useEffect, useState } from 'react'

import { useEffect } from "react";
import { useNavigate } from "react-router";

export const Notice = () => {
  let username = JSON.parse(sessionStorage.getItem("username")) || false ;
  const navigate = useNavigate();

  useEffect(()=>{
    if(!username){
      return navigate("/")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  return (
    <div>Notice</div>
  )
}
