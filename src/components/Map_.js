import React from 'react'


class Map extends React.Component {
  constructor(props) {
    super(props)

    this.mapRef = React.createRef()
  }

  render = () =>
    <div
      ref={this.mapRef}
      className="Map"
    />
}


export default Map