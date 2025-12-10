import React, { useEffect, useRef, useState } from 'react'

export default function Carouseal({data}) {


  let images=data
    
     let [curr,setCurr]=useState(0)
     let timer=useRef(null)
    
    useEffect(()=>{
     
        setTimer()

    
    },[curr])

   

    function setTimer(){
        if(timer.current==null)
        {
             
           timer.current=setInterval(()=>{
               setCurr((prev)=>{
                      
                 let val= prev>=images.length-1 ? 0 : prev+1
                  console.log(val)  
                 return val
                  
               })  
              
             },3000)

        }else{
            return 
        }



    }



   function next(){

    
       setCurr((prev)=>
       { 
         let val= prev>=images.length-1 ? 0 : prev+1
            return val
       })
   }

  function prev(){
        let val= curr<=0 ? images.length-1 : curr-1
     setCurr(val)
  }


  return (
    
    <div style={{
        width:"100%",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        border:"1px solid red",
        position:"relative"

    }}>
         <button style={{
            position:"absolute",
            left:"80px"

         }} 
          onClick={prev}
         
         >Prev</button>   
       
             <img style={{
             width:"99%",
             border:"1px solid red"
             }} src={images[curr]} alt="" />
       
         <button 
         style={{
            position:"absolute",
            right:"80px"

         }}
           
         onClick={next}
         
         >Next</button>


    </div>
  )
}
