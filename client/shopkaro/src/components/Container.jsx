import React from 'react'
import Cards from './Card'
export default function Container({data}) {
  return (
    <div style={{display:'grid',
                 gridTemplateColumns:"repeat(3,1fr)"
                 }}>
      
        {data.map((el,i,arr)=>{
          
          return <Cards data={el} />

        })}
    
    </div>


  )
}
