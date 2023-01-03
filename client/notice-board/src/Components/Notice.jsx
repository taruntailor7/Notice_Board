import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Notice = () => {
  const [desc, setDesc] = useState();
  const navigate = useNavigate();
  let username = JSON.parse(sessionStorage.getItem("username")) || false ;

  useEffect(()=>{
    if(!username){
      return navigate("/")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleChange = (e) => {
    setDesc(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    try {
      axios.post("https://notice-board-z3uw.onrender.com/notices/create",{
          desc:desc,
          username:username
      }).then((res)=>alert(res.data.message)) 
        .catch(()=>{
          alert("Notice should be minimum of 100 characters!")
        });
    } catch (error) {
      console.log(error,"error")
    } 
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <textarea type="text" name="desc" placeholder='Enter Notice' rows="4" cols="50" onChange={handleChange} required/>
          <button type="submit">Submit</button>
      </form>
    </>
  )
}
