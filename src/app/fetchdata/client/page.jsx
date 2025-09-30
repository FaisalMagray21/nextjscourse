"use client"
import React from 'react'
import { useState,useEffect } from 'react'

const page = () => {
    const [data,setdata]=useState([]);
    useEffect(()=>{
 const fetchdata=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    
    const result=await res.json();
    setdata(result)
    console.log("Getting data from client side",result);


 }
 fetchdata();
    },[])
  return (
    <div>
        <h1>
            client side fetching data 
            {
              data.map((user)=>
              <div key={user.id}>
                <h2>{user.name}</h2>
                <h1>{user.email}</h1>

              </div>
                

              )
            }
            
        </h1>
    </div>
  )
}

export default page