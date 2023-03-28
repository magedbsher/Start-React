import React from 'react'
import './Start.css'
import man from "./avataaars.svg";

export default function Start() {
  return (
    <>
     <section id="start">
        <div className="d-flex justify-content-center align-items-center flex-column p-5">
          <img src={man} alt="man" />
          <h1>Start React</h1>
          <h2>Graphic Artist - Web Designer - Illustrator</h2>
        </div>
        <div className="star">
          <div className="left-line"></div>
          <div>
            <i className="fa-regular fa-star"></i>
          </div>
        </div>
      </section> 
    </>
  )
}
