import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Seaction from './components/Layout/Seaction'
import About from './components/Pages/About'
import BikeHomeScreen from './components/Layout/BikeHomeScreen'
import BikeScreen from './components/Layout/BikeScreen'
import axios from 'axios'
import Footer from './components/Layout/Footer'

const App = (props) => {
  const [Bikes, setBike] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchBike = async () => {
      const { data } = await axios.get('https://bike24g9.herokuapp.com/bike')
      setBike(data)
      setLoading(false)
    }
    fetchBike()
  }, [])

  //Search Users
  const searchBike = async (text) => {
    setLoading(true)
    const res = await axios.get(
      `https://bike24g9.herokuapp.com/bike/?q=${text}`
    )
    setBike(res.data)
    setLoading(false)
  }

  return (
    <Router>
      <Navbar searchBike={searchBike} />
      <Route exact path="/" component={Seaction} />
      <div className="container mx-auto">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <BikeHomeScreen Bikes={Bikes} loading={loading} />
              </Fragment>
            )}
          />

          <Route path="/product/:id" component={BikeScreen} />
          <Route path="/about" component={About} />
        </Switch>{' '}
        <Footer />
      </div>
    </Router>
  )
}

export default App
