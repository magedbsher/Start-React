import React from 'react'
import { Link } from 'react-router-dom'




export default function Navbar() {
  return (
    <>
      

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="start">Start React</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Portofolio">potrofolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">contact</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
