import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Electronics from "../pages/Electronics"
import FootWeare from "../pages/Footweare"
import HomeAndKitchen from "../pages/HomeAndKitchen"
import Kids from "../pages/Kids"
import Mens from "../pages/Mens"
import Toys from "../pages/Toys"
import Womens from "../pages/Womens"
export default function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/mens" element={<Mens/>}  />
        <Route path="/kids" element={<Kids/>}  />
        <Route path="/womens" element={<Womens/>}  />
        <Route path="/toys" element={<Toys/>}  />
        <Route path="/homeandkitchen" element={<HomeAndKitchen/>}  />
        <Route path="/footwear" element={<FootWeare/>}  />
        <Route path="/electronics" element={<Electronics/>}  />
          

    </Routes>
  )
}
