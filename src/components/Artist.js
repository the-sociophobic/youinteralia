import React from 'react'

import Img from 'components/Img'
import Player from 'components/Player'
import ExternalLink from 'components/ExternalLink'
import isMobile from 'utils/isMobile'


class Artist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      routeInfoOpened: !isMobile(),
      artistInfoOpened: false
    }
  }

  toggleRouteInfo = () => {}
  toggleArtistInfo = () => {}

  render = () => {
    const { artist } = this.props

    return !artist ?
      <></>
      :
      (
        <div className="Artist">
          <div className="Artist__content">
            <div
              className="Artist__close"
              onClick={() => this.props.closeArtist()}
            />

            <div className="Artist__text">
              <Player artistId={artist.id} />
            </div>

            <Img
              cover
              className="Artist__map"
              src={artist.map}
            />

            <div className="Artist__footer">
              <ExternalLink to="https://prohelvetia.ru/en/" newTab >
                <div className="Artist__footer__logo" />
              </ExternalLink>
            </div>
          </div>
        </div>
      )
  }
}


export default Artist