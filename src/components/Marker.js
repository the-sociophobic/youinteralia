import React from 'react'

import { StoreContext } from 'components/Store'
import Player from 'components/Player'
// import isMobile from 'utils/isMobile'
import { Link } from 'react-router-dom'


class Marker extends React.Component {

  static contextType = StoreContext

  render = () =>
    <div className={`
      Marker
      Marker--${this.props.artist.city}
      ${this.context.zoom <= (this.context.currentCity === "spb" ? 12 : 14) && "Marker--small"}
    `}>
      <Link to={`/artist/${this.props.artist.id}`}>
        <div className={`Marker__dot`} />
      </Link>

      <Player
        artist={this.props.artist}
        compact={true}
        className={this.context.zoom <= (this.context.currentCity === "spb" ? 13 : 15) && "Player--hidden"}
      />
    </div>
}


export default Marker