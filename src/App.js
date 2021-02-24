import React from 'react'

import Div100vh from 'react-div-100vh'

import Map from 'components/Map'
import Menu from 'components/Menu'
import Artist from 'components/Artist'
import { StoreProvider } from 'components/Store'


class App extends React.Component {
  state = {
    menuOpened: false,
    currentCity: "spb",
    currentArtist: null,
  }

  mapRef = React.createRef()

  render = () =>
    <StoreProvider>
      <Div100vh>
        <div className="App">
          <Map
            ref={this.mapRef}
            currentCity={this.state.currentCity}
            setArtist={artist => this.setState({
              currentArtist: artist
            })}
          />
          <Artist
            currentArtist={this.state.currentArtist}
            closeArtist={() => this.setState({
              currentArtist: null
            })}
            mapRef={this.mapRef}
          />
          <Menu
            menuOpened={this.state.menuOpened}
            toggleMenu={() => this.setState({ menuOpened: !this.state.menuOpened })}
            currentCity={this.state.currentCity}
            toggleCity={() => this.setState({
              currentCity: this.state.currentCity === "gen" ? "spb" : "gen"
            })}
            setArtist={artist => this.setState({
              currentArtist: artist
            })}
            mapRef={this.mapRef}
          />
        </div>
      </Div100vh>
    </StoreProvider>
}


export default App
