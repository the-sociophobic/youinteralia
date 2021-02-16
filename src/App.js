import React from 'react'

import Div100vh from 'react-div-100vh'

import Map from 'components/Map'
import Menu from 'components/Menu'
import { StoreProvider } from 'components/Store'


class App extends React.Component {
  state = {
    currentCity: "spb",
  }

  mapRef = React.createRef()

  render = () =>
    <StoreProvider>
      <Div100vh>
        <div className="App">
          <Map
            ref={this.mapRef}
            currentCity={this.state.currentCity}
          />
          <Menu
            currentCity={this.state.currentCity}
            toggleCity={() => this.setState({
              currentCity: this.state.currentCity === "gen" ? "spb" : "gen"
            })}
            mapRef={this.mapRef}
          />
        </div>
      </Div100vh>
    </StoreProvider>
}


export default App
