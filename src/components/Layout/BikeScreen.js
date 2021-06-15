import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

const BikeScreen = ({ match }) => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchProduct = async () => {
      //eslint-disable-next-line
      const { data } = await axios.get(
        `https://bike24g9.herokuapp.com/bike/${match.params.id}`
      )

      setProduct(data)
      setLoading(false)
    }

    fetchProduct()
  }, [match])

  if (loading) return <Spinner />

  return (
    <Fragment>
      <div className="w-full mt-5 bg-gray-200 dark:bg-gray-900 py-10">
        <div className="mb-5">
          <Link
            to="/"
            className="ml-7 py-2 px-3 text-white font-semibold rounded  bg-blue-500 hover:bg-blue-700"
          >
            Back
          </Link>
        </div>
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
              <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                <div className="w-28 h-28 mb-3 p-2 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    className="w-full h-full overflow-hidden object-cover "
                    src={product.bkimg}
                    alt="avatar"
                  />
                </div>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-medium mb-1">
                  {product.bkBrdcmpy}
                </h2>
                <p className="flex text-gray-600 dark:text-gray-100 text-sm tracking-medium font-normal mb-8 text-left w-10/12">
                  <b>Model -</b> {product.bkModel}
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-left w-10/12">
                  <b>Manufacture Year -</b>
                  {product.bkYearofmauf}
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-left w-10/12">
                  <b>Color -</b> {product.bkColor}
                </p>
              </div>
              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-medium mb-8">
                  Other Details
                </h2>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-left w-10/12">
                  <b>Driven -</b>
                  {product.bkDriven}
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-left w-10/12">
                  <b>Registration No -</b>
                  {product.bkRngno}
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-left w-10/12">
                  <b>Detail -</b>
                  {product.bkDetail}
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-left w-10/12">
                  <b>Price -</b> ₹{product.bkPrice}
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
                <div className="mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer text-indigo-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </div>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal text-left font-medium mb-4">
                  {product.bkOwner}
                </h2>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-6 text-left">
                  <b>Mobile No -</b>
                  {product.bkOwnerno}
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-6 text-left">
                  <b>E-Mail -</b>
                  {product.bkOwnereml}
                </p>
                <div className="flex items-center">
                  <svg
                    className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="cursor-pointer w-4 text-gray-200 dark:text-gray-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BikeScreen
