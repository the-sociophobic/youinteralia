import React from 'react'

import { StoreContext } from 'components/Store'
import Player from 'components/Player'
import isMobile from 'utils/isMobile'


class Marker extends React.Component {

  static contextType = StoreContext

  render = () =>
    <div className={`Marker Marker--${this.props.artist.city}`}>
      <div className="Marker__dot" />

      <Player
        artist={this.props.artist}
        compact={isMobile()}
        className={this.context.zoom <= 13 && "Player--hidden"}
      />
    </div>
}


export default Marker