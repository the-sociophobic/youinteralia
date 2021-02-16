import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import {
  PetersbourgStyle,
  GenevaStyle
} from 'components/styles'


// const AnyReactComponent = ({ text }) => <div>{text}</div>
 

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      // lat: 59.95,
      // lng: 30.33,
      lat: 46.20921773163431,
      lng: 6.15092970185338,
    },
    // zoom: 15,
    zoom: 16.8,
  }

  state = {
    // mapStyle: PetersbourgStyle,
    mapStyle: GenevaStyle,
  }

  // componentDidMount = () =>
  //   setTimeout(() =>
  //     this.setState({
  //       mapStyle: GenevaStyle,
  //     }), 5000)
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDtnk19nAsbs98Rx81bCzvkF5jyD0o7W4w" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{
            styles: this.state.mapStyle,
            disableDefaultUI: true
          }}    
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    )
  }
}
 
export default SimpleMap