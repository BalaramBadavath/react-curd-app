import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Read = () => {

  let [individual,setIndividual]= useState("")
  

  let {id} = useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/USERS/${id}`)
    .then((res)=>{
      setIndividual(res.data)
    })
  },[])

  let {name,phone,email,degree,stream,percentage,yop} = individual

  return (
    <>
      <h1>{name}</h1>
      <h1>{phone}</h1>
      <h1>{email}</h1>
      <h1>{degree}</h1>
      <h1>{stream}</h1>
      <h1>{percentage}</h1>
      <h1>{yop}</h1>
      
    </>
  )
}

export default Read