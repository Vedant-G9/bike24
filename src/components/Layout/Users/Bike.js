import React, { useState, useEffect } from 'react'

import axios from 'axios'

const Bike = () => {
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
      <div className="flex flex-wrap ">
        {Bikes.map((bike) => (
          <div className="w-full p-5 md:w-6/12 xl:w-3/12  lg:w-4/12 lg:mb-0  transform transition duration-500 hover:scale-110">
            <div className="w-full h-full flex items-center justify-center  md:px-0 px-4">
              <div className="bg-white  pb-6 shadow-xl max-w-sm">
                <img className="w-full" src={bike.bkimg} alt="costume-party" />
                <div className="mt-4 pl-4">
                  <p className="w-2/4 text-base leading-normal text-black-800 dark:text-black-100">
                  <p className=" text-base font-bold leading-normal text-black-800 dark:text-black-100">
                    Manufacture
                    </p>{' '}
                    {bike.bkBrdcmpy}
                  </p>
                </div>
                <div className="mt-4 flex items-center pl-4 text-black-600 dark:text-black-100">
                  <p className="text-sm leading-none text-black-700 dark:text-black-100 ml-2">
                  <p className=" text-base font-bold leading-normal text-black-800 dark:text-black-100">
                  Price
                    </p>{' '}
                    ₹{bike.bkPrice}
                  </p>
                </div>
                <div className="mt-4 pl-4 flex items-center text-black-600 dark:text-black-100">
                  <p className="text-sm leading-none text-black-700 dark:text-black-100 ml-2">
                    <p className=" text-base font-bold leading-normal text-black-800 dark:text-black-100">
                      Bike Model
                    </p>{' '}
                    {bike.bkModel}
                  </p>
                </div>

                <div className="mt-5 pl-4">
                  <div className="flex items-center mt-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Bike
