import React from 'react'
import Bike from './Bike'
import Spinner from './Spinner'

const BikeHomeScreen = ({ Bikes, loading }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <>
        <div className="flex justify-center my-5">
          <h1 className="text-4xl font-extrabold animate-pulse tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">
            Bike List
          </h1>
        </div>
        <div className="flex flex-wrap ">
          {Bikes.map((bike) => (
            <Bike key={bike._id} bike={bike} />
          ))}
        </div>
      </>
    )
  }
}

export default BikeHomeScreen
