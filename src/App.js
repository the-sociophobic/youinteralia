import React from 'react'

import Div100vh from 'react-div-100vh'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { StoreProvider } from 'components/Store'
import Home from 'pages/Home'
import Test from 'pages/Test'


class App extends React.Component {

  mapRef = React.createRef()

  render = () =>
    <StoreProvider>
      <Div100vh>
        <Router>
          <Switch>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Div100vh>
    </StoreProvider>
}


export default App
