import React from 'react'
import './Portofolio.css'
import cabin from "./images/cabin.png";
import cake from "./images/cake.png";
import circus from "./images/circus.png";
import game from "./images/game.png";
import safe from "./images/safe.png";
import submarine from "./images/submarine.png";




export default function Portofolio() {
  return (
    <>

<section id="portofolio">
        <div className="text-center py-5">
          <h2>portofolio</h2>
        </div>
        <div className="container">
          <div className="row py-5 g-5">
            <div className="col-md-4">
              <div className="image-holder">
                <img src={cabin} className="w-100 rounded" alt=''></img>
                <div className="layer">
                  <i className="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-holder">
                <img src={cake} className="w-100 rounded" alt=''></img>
                <div className="layer">
                  <i className="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-holder">
                <img src={safe} className="w-100 rounded" alt=''></img>
                <div className="layer">
                  <i className="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-holder">
                <img src={submarine} className="w-100 rounded" alt=''></img>
                <div className="layer">
                  <i className="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-holder">
                <img src={game} className="w-100 rounded" alt=''></img>
                <div className="layer">
                  <i className="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-holder">
                <img src={circus} className="w-100 rounded" alt=''></img>
                <div className="layer">
                  <i className="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
