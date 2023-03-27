import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import man from "./avataaars.svg";
import cabin from "./images/cabin.png";
import cake from "./images/cake.png";
import circus from "./images/circus.png";
import game from "./images/game.png";
import safe from "./images/safe.png";
import submarine from "./images/submarine.png";

export default function Home() {
  return (
    <>




      <section id="start">
        <div classNameName="d-flex justify-content-center align-items-center flex-column p-5">
          <img src={man} alt="man" />
          <h1>Start React</h1>
          <h2>Graphic Artist - Web Designer - Illustrator</h2>
        </div>
        <div classNameName="star">
          <div classNameName="left-line"></div>
          <div>
            <i className="fa-regular fa-star"></i>
          </div>
        </div>
      </section>

      <section id="portofolio">
        <div classNameName="text-center py-5">
          <h2>portofolio</h2>
        </div>
        <div classNameName="container">
          <div classNameName="row py-5 g-5">
            <div classNameName="col-md-4">
              <div classNameName="image-holder">
                <img src={cabin} classNameName="w-100 rounded"></img>
                <div classNameName="layer">
                  <i classNameName="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
            <div classNameName="col-md-4">
              <div classNameName="image-holder">
                <img src={cake} classNameName="w-100 rounded"></img>
                <div classNameName="layer">
                  <i classNameName="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
            <div classNameName="col-md-4">
              <div classNameName="image-holder">
                <img src={safe} classNameName="w-100 rounded"></img>
                <div classNameName="layer">
                  <i classNameName="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
            <div classNameName="col-md-4">
              <div classNameName="image-holder">
                <img src={submarine} classNameName="w-100 rounded"></img>
                <div classNameName="layer">
                  <i classNameName="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
            <div classNameName="col-md-4">
              <div classNameName="image-holder">
                <img src={game} classNameName="w-100 rounded"></img>
                <div classNameName="layer">
                  <i classNameName="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
            <div classNameName="col-md-4">
              <div classNameName="image-holder">
                <img src={circus} classNameName="w-100 rounded"></img>
                <div classNameName="layer">
                  <i classNameName="fa-brands fa-cross"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div classNameName="container">
          <div classNameName="text-center py-5 text-light">
            <h2>about</h2>
          </div>
          <div classNameName="content w-50 mx-auto">
            <div classNameName="row  text-light py-5">
              <div classNameName="col-md-6 fs-5">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div classNameName="col-md-6 fs-5">
                <p>
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div classNameName="text-center py-5">
          <h2>contact</h2>
        </div>
        <div classNameName="container ">
          <div classNameName="inputs w-50 mx-auto ">
            <input
              type="text"
              placeholder="Name"
              classNameName="form-control mt-4 "
            />
            <input
              type="text"
              placeholder="Email"
              classNameName="form-control mt-4"
            />
            <input
              type="text"
              placeholder="phone"
              classNameName="form-control mt-4"
            />
            <textarea
              rows={10}
              cols={80}
              classNameName="form-control mt-4"
            ></textarea>
            <button
              classNameName="btn btn-success mt-5 fs-3 p-3"
              placeholder="Message"
            >
              send
            </button>
          </div>
        </div>
      </section>

      <footer classNameName="bg-dark text-white text-center position-static fixed-bottom w-100 py-5">
        <div classNameName="container ">
          <div classNameName="row">
            <div classNameName="col-md-4">
              <h2>Location</h2>
              <p>2215 John Daniel Drive Clark, MO 65243 </p>
            </div>
            <div classNameName="col-md-4">
              <h2>Around the Web</h2>
              <div>
                <i classNameName="fa-brands fa-facebook-f"></i>
                <i classNameName="fa-brands fa-twitter-f"></i>
                <i classNameName="fa-brands fa-linkedin-f"></i>
                <i classNameName="fa-brands fa-dribble-square"></i>
              </div>
            </div>
            <div classNameName="col-md-4">
              <h2>About Freelancer</h2>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route{" "}
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </footer>
    </>
  );
}
