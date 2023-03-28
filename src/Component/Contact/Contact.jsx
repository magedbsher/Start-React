import React from 'react'
import'./Contact.css'
export default function Contact() {
  return (
    <>


<section id="contact">
        <div className="text-center py-5">
          <h2>contact</h2>
        </div>
        <div className="container ">
          <div className="inputs w-50 mx-auto ">
            <input
              type="text"
              placeholder="Name"
              className="form-control mt-4 "
            />
            <input
              type="text"
              placeholder="Email"
              className="form-control mt-4"
            />
            <input
              type="text"
              placeholder="phone"
              className="form-control mt-4"
            />
            <textarea
              rows={10}
              cols={80}
              className="form-control mt-4"
            ></textarea>
            <button
              className="btn btn-success mt-5 fs-3 p-3"
              placeholder="Message"
            >
              send
            </button>
          </div>
        </div>
      </section>


      
    </>
  )
}
