import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <footer className="bg-dark text-white text-center position-static fixed-bottom w-100 py-5">
          <div className="container ">
            <div className="row">
              <div className="col-md-4">
                <h2>Location</h2>
                <p>2215 John Daniel Drive Clark, MO 65243 </p>
              </div>
              <div className="col-md-4">
                <h2>Around the Web</h2>
                <div>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter-f"></i>
                  <i className="fa-brands fa-linkedin-f"></i>
                  <i className="fa-brands fa-dribble-square"></i>
                </div>
              </div>
              <div className="col-md-4">
                <h2>About Freelancer</h2>
                <p>
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by Route
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </footer>
      </footer>
    </>
  );
}
