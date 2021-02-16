import React from 'react'

import Div100vh from 'react-div-100vh'

import Map from 'components/Map'
import Menu from 'components/Menu'
import { StoreProvider } from 'components/Store'


class App extends React.Component {
  state = {
    currentCity: "spb",
  }

  render = () =>
    <StoreProvider>
      <Div100vh>
        <div className="App">
          <Map currentCity={this.state.currentCity} />
          <Menu
            currentCity={this.state.currentCity}
            toggleCity={() => this.setState({
              currentCity: this.state.currentCity === "gen" ? "spb" : "gen"
            })}
          />
        </div>
      </Div100vh>
    </StoreProvider>
}


export default App
