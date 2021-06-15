import React from 'react'
import { Link } from 'react-router-dom'

const Bike = ({ bike }) => {
  return (
    <div className="p-4 md:w-6/12 xl:w-3/12   lg:w-4/12 lg:mb-0   transform transition duration-500 hover:scale-110">
      <div className="w-full h-full   flex pl-8   md:px-0  dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 pb-2  shadow-xl max-w-sm">
          <img className="w-full" src={bike.bkimg} alt="costume-party" />
          <Link to={`/product/${bike.id}`}>
            <div className="max-w-md p-3 cursor-pointer bg-gray-50 shadow-sm rounded-lg ">
              <div className="flex justify-center items-center">
                <p className=" text-xl  font-bold leading-normal text-gray-800 dark:text-gray-100">
                  {bike.bkBrdcmpy}
                </p>
              </div>
            </div>
          </Link>

          <div className="max-w-md p-3 px-5  shadow-sm rounded-lg my-2">
            <p className="mt-2 font-semibold text-base text-gray-600">
              <span className="font-bold  text-gray-700">Model : </span>{' '}
              {bike.bkModel}
            </p>
            <p className="mt-2 font-semibold text-base text-gray-600">
              <span className="font-bold  text-gray-700">
                Manufacture Year :{' '}
              </span>{' '}
              {bike.bkYearofmauf}
            </p>
          </div>
          <div className="mt-6">
            <button
              className="text-white font-bold uppercase text-base px-5 py-2 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition-all   bg-gray-500 hover:bg-blue-600 ease-in duration-150 "
              type="button"
            >
              <Link to={`/product/${bike.id}`}>More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bike
