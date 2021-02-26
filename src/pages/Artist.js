import React from 'react'

import ResizeObserver from 'resize-observer-polyfill'

import Img from 'components/Img'
import Player from 'components/Player'
import Dropdown from 'components/Dropdown'
// import isMobile from 'utils/isMobile'
import {
  StoreContext,
  getMessage
} from 'components/Store'


const isMobile = () =>
  window.innerWidth < 992


class Artist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      routeInfoOpened: !isMobile(),
      artistInfoOpened: false,
      textHeight: 0,
    }

    this.textRef = React.createRef()
  }

  static contextType = StoreContext

  componentDidMount() {
    this.resizeObs = new ResizeObserver(this.updateTextHeight.bind(this))
      .observe(this.textRef.current)
  }

  updateTextHeight = () =>
    this.setState({ textHeight: this.textRef?.current?.clientHeight })

  toggleRouteInfo = () =>
    this.setState({
      routeInfoOpened: !this.state.routeInfoOpened,
      artistInfoOpened: !isMobile() ? this.state.routeInfoOpened : this.state.artistInfoOpened,
    })

  toggleArtistInfo = () =>
    this.setState({
      routeInfoOpened: !isMobile() ? this.state.artistInfoOpened : this.state.routeInfoOpened,
      artistInfoOpened: !this.state.artistInfoOpened,
    })

  render = () => {
    const { artist } = this.props

    return !artist ?
      <></>
      :
      (
        <div className="Artist">
          <div className="Artist__content">

            <div
              ref={this.textRef}
              className="Artist__content__text"
            >
              <div className="Artist__content__text__dropdowns">
                <Dropdown
                  block
                  title={getMessage(this, "Artist.routeInfo")}
                  opened={this.state.routeInfoOpened}
                  toggleOpened={() => this.toggleRouteInfo()}
                  maxHeight={isMobile() ? undefined : this.state.textHeight - 172}
                >
                  {artist.aboutRoute}
                </Dropdown>
                <Dropdown
                  block
                  title={artist.name}
                  city={artist.city}
                  opened={this.state.artistInfoOpened}
                  toggleOpened={() => this.toggleArtistInfo()}
                  maxHeight={isMobile() ? undefined : this.state.textHeight - 172}
                >
                  {artist.aboutArtist}
                </Dropdown>
              </div>
              <Player
                hideArrow
                artist={artist}
              />
            </div>

            <div className="Artist__content__map">
              <Img
                cover
                src={artist.png}
              />
              <Img
                cover
                src={artist.svg}
              />
            </div>

          </div>

        </div>
      )
  }
}


export default Artist