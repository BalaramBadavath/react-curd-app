import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  let [data,SetData] = useState({name:"",phone:"",email:"",degree:"",stream:"",percentage:"",yop:""})

  let {name,phone,email,degree,stream,percentage,yop} = data

  let {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:3000/USERS/${id}`)
    .then((res)=>{
      SetData(res.data)
    })
  },[])
  let handleChange = (e)=>{
    let {name,value} = e.target
    SetData({...data,[name]:value})
  }
  let navigate = useNavigate()
  let handleSubmit=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3000/USERS/${id}`,data)
    navigate('/')
  }

  

  return (
    <>
      <h1>UPADTE YOUR DETAILS</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name : </label>
      <input type="text" name='name' id='name' value={name} placeholder='Enter Your Name' onChange={handleChange}/>
      <br /><br />
      <label htmlFor="phone">Phone : </label>
      <input type="tel" name='phone' id='phone' value={phone} placeholder='Enter Your Phone Number'onChange={handleChange} />
      <br /><br />
      <label htmlFor="email">Email : </label>
      <input type="email" name='email' id='email' value={email} placeholder='Enter Your Email' onChange={handleChange}/>
      <br /><br />
      <label htmlFor="degree">Degree : </label>
      <input type="text" name='degree' id='degree' value={degree} placeholder='Enter Your Degree' onChange={handleChange}/>
      <br /><br />
      <label htmlFor="stream">Stream : </label>
      <input type="text" name='stream' id='stream' value={stream} placeholder='Enter Your Stream' onChange={handleChange}/>
      <br /><br />
      <label htmlFor="percentage">Percentage : </label>
      <input type="text" name='percentage' id='percentage' value={percentage} placeholder='Enter Your Percentage' onChange={handleChange}/>
      <br /><br />
      <label htmlFor="yop">YOP : </label>
      <input type="text" name='yop' id='yop' value={yop} placeholder='Enter Your YOP' onChange={handleChange}/>
      <br /><br />
      <button>UPDATE</button>
      </form>   
    </>
  )
}

export default Update