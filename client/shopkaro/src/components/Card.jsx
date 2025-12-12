import React, { useEffect, useState } from "react";

export default function Cards({data}) {

  const styles = {
    card: {
      margin: "auto",
      width: "250px",
      height: "auto",
      boxShadow:
        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.2) 0px 1px 2px",
      borderRadius: "10px",
      paddingBottom: "10px",
    },

    img: {
    
      textAlign:"center",
      width: "100px",
      height: "150px",
      borderRadius: "8px",
    },

    data: {
      margin: "auto",
      width: "85%",
    },

    d1: {
      fontSize: "14px",
      fontWeight: "550",
      marginLeft: "8px",
    },

    d2: {
      color: "#a7d579",
      fontSize: "14px",
      fontWeight: "600",
    },

    d3: {
      fontSize: "12px",
      marginBottom: "6px",
    },

    icon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      lineHeight: "1px",
      fontWeight: "300",
    },

    rate: {
      color: "#e9d04c",
      fontSize: "14px",
    },

    price: {
      display: "flex",
      gap: "5px",
      marginTop: "5px",
    },

    p1: {
      fontWeight: "500",
      fontSize: "18px",
    },

    p2: {
      color: "#d6d4d7",
      fontSize: "18px",
      fontWeight: "500",
      textDecoration: "line-through",
    },

    p3: {
      color: "black",
      backgroundColor: "#a7d579",
      fontSize: "13px",
      padding: "1px 3px",
      borderRadius: "4px",
      height: "18px",
    },

    buttonBox: {
      width: "100%",
      marginTop: "10px",
    },

    button: {
      backgroundColor: "#16a8dc",
      color: "white",
      width: "100%",
      height: "40px",
      border: "none",
      borderRadius: "6px",
      fontWeight: "600",
      cursor: "pointer",
    },

    mainBox: {
        textAlign:"center",
        padding:"20px 30px",
       height:"500px",
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      marginTop: "20px",
    },
  };


  return (
    <div style={styles.mainBox}>
   
        <div key={data.id} style={styles.card}>
          
      
          <img style={styles.img} src={data.image} alt="" />

          <div style={styles.data}>
            
            <p style={styles.d1}>{data.title}...</p>
            <p style={styles.d2}>{data.category}</p>
            <p style={styles.d3}>100ml</p>

            <div style={styles.icon}>
              
              <p style={{ fontSize: "11px" }}>4.8</p>
            </div>

            <div style={styles.price}>
              <p style={styles.p1}>₹{data.price}</p>
              <p style={styles.p2}>₹{data.price + 100}</p>
              <p style={styles.p3}>20% off</p>
            </div>
          </div>

          <div style={styles.buttonBox}>
            <button style={styles.button}>ADD TO CART</button>
          </div>

        </div>

    </div>
  );
}