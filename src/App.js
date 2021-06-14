import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Seaction from './components/Layout/Seaction'
import About from './components/Pages/About'
import BikeHomeScreen from './components/Layout/BikeHomeScreen'
import BikeScreen from './components/Layout/BikeScreen'
import axios from 'axios'

const App = (props) => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Seaction} />
      <div className="container mx-auto">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <BikeHomeScreen />
              </Fragment>
            )}
          />

          <Route path="/product/:id" component={BikeScreen} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
