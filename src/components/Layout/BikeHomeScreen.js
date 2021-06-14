import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Bike from './Bike'

import axios from 'axios'

const BikeHomeScreen = () => {
  const [Bikes, setBike] = useState([])
  useEffect(() => {
    const fetchBike = async () => {
      const { data } = await axios.get('http://localhost:5000/bike')
      setBike(data)
    }
    fetchBike()
  }, [])

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

export default BikeHomeScreen
