import React from 'react'
import Error from'./sorry-page-not-found-error-emoticon-isolated-vector-illustration-195804498.jpg'
export default function Notfound() {
  return (
    <>
    <div className='bg-danger text-center py-5 mx-auto'>
          <h1>
        Notfound
      </h1>
      <h2>this page is not exist</h2>
      <img src={Error} alt="error" />
    </div>
    
    </>
  )
}
