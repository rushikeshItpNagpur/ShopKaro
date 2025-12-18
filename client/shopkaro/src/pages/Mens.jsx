import React, { useEffect, useState } from 'react'
import Container from '../components/Container'

export default function Mens() {
let [data,setData]=useState([])

  useEffect(()=>{
    getData()

  },[])


  async function getData(){

    let data=await fetch("http://localhost:5000/mens")
    let actualData=await data.json()
    setData(actualData)
  }





  return (
    <div>
       <h1>mens</h1>
      <Container data={data}/>
    </div>
  )
}
