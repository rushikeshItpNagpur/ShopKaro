import React from 'react'
import logo from "../images/Logo.png"
import { Link } from 'react-router-dom'
export default function Navbar() {
 
 let style={
        width:"100%",
        height:"80px",
        backgroundColor:"#1a48a5",
        boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center"
    }
 let linkStyle={
    textDecoration:"none",
    fontSize:"15px",
    fontFamily:"ui-serif",
    color:"white"
    
 }
  return (
    <div style={style}>
       <Link to="/" >  <img style={{width:"100px"}} src={logo} alt="" /></Link>
      
       <Link style={linkStyle} to="/mens" > mens category</Link>
       <Link style={linkStyle} to="/womens">womes category</Link>
       <Link style={linkStyle} to="/kids" >kids category</Link>
       <Link style={linkStyle} to="/electronics">electronics</Link>
      <Link style={linkStyle} to="/homeandkitchen" >home and kitchen</Link>
      <Link style={linkStyle} to="/toys" >toys</Link>
       <Link style={linkStyle} to="footwear" >foot wear</Link>

    </div>
  )
}
