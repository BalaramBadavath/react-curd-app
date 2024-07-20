import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  let [users,SetUser]= useState(null)
  useEffect(()=>{
    let output = axios.get("http://localhost:3000/USERS")
    output.then((res)=>{
      SetUser(res.data)
    })
  },[])
  
  let handleDelete=(id)=>{
    axios.delete(`http://localhost:3000/USERS/${id}`)
    window.location.reload()
  }
  return (
    <table>
      <Link to={"/create"}><button>ADD ➕</button></Link>
      <tr>
        <th>SI.NO</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>PHONE</th>
        <th>DEGREE</th>
        <th>STREAM</th>
        <th>PERCENTAGE</th>
        <th>Y.O.P</th>
      </tr>
      {
        users==null?"Loading...":users.map((person)=>{
            return (<>
              <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.phone}</td>
                <td>{person.email}</td>
                <td>{person.degree}</td>
                <td>{person.stream}</td>
                <td>{person.percentage}</td>
                <td>{person.yop}</td>
                <td><Link to={`/read/${person.id}`}><button>READ</button></Link></td>
                <td><Link to={`/update/${person.id}`}><button>EDIT</button></Link></td>
                <td><button onClick={()=>{handleDelete(person.id)}}>DELETE</button></td>
              </tr>
            </>)
        })
      }
    </table>
  )
}

export default Home