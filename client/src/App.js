import React from 'react'

import Div100vh from 'react-div-100vh'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Map from 'components/Map'
import Menu from 'components/Menu'
import BigMenu from 'components/BigMenu'
import { StoreProvider } from 'components/Store'


class App extends React.Component {

  mapRef = React.createRef()

  render = () =>
    <StoreProvider>
      <Div100vh>
        <Router>
          <Switch>
            <Route path="/">
              <div className="App">
                <Map ref={this.mapRef} />
                <BigMenu mapRef={this.mapRef} />
                <Menu mapRef={this.mapRef} />
              </div>
            </Route>
          </Switch>
        </Router>
      </Div100vh>
    </StoreProvider>
}


export default App
