import React from 'react'

const Seaction = () => {
  return (
    <div>
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover animate-pulse "
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bike two four
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            You are on your own. You are not protected by two tons of steel,
            rubber, foam padding and safety glass. Neither are you steering two
            tons of guided missile toward other cars, people and property. If
            you are prepared to accept the responsibility of your own actions,
            then motorcycling can be both safe and thrilling
          </p>
        </div>
      </div>
    </div>
  )
}

export default Seaction
