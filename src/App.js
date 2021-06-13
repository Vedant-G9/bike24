import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Alert from './components/Layout/Alert'
import Navbar from './components/Layout/Navbar'
import Seaction from './components/Layout/Seaction'

import Search from './components/Layout/Users/Search'
import Users from './components/Layout/Users/Users'
import User from './components/Layout/Users/User'
import About from './components/Pages/About'

import GithubState from './Context/Github/GithubState'
import Bike from './components/Layout/Users/Bike'

const App = (props) => {
  const [alert, setAlert] = useState(null)

  // Get user Repos

  //Clear Users

  //Set alert
  const showAlert = (msg) => {
    setAlert({ msg })

    setTimeout(() => setAlert(null), 3000)
  }

  return (
    <GithubState>
      <Router>
        <main className="bg-gray-100">
          <Navbar />
          <Route exact path="/" component={Seaction} />
          <div className="flex justify-center">
            <h2 className="text-3xl mt-3  font-extrabold  text-gray-800 tracking-tight">
              Bike List
            </h2>
          </div>

          <div className="container mx-auto px-4">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    {/** <Search setAlert={showAlert} /> */}
                    <Users />
                    <Bike />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </main>
      </Router>
    </GithubState>
  )
}

export default App
