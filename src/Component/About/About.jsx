import React from "react";
import "./About.css";




export default function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="text-center py-5 text-light">
            <h2>about</h2>
          </div>
          <div className="content w-50 mx-auto">
            <div className="row  text-light py-5">
              <div className="col-md-6 fs-5">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6 fs-5">
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
    </>
  );
}
