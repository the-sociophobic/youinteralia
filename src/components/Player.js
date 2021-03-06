import React from 'react'

import Ticker from 'components/Ticker'
import Link from 'components/CustomLink'
import {
  StoreContext,
  FormattedMessage,
} from 'components/Store'
import secondsParse from 'utils/secondsParse'


class Player extends React.Component {

  static contextType = StoreContext

  render = () => {
    const { artist, secondaryMarker } = this.props

    return (
      <div className={`
        Player
        ${this.props.className}
        ${this.props.compact && "Player--compact"}
        ${this.props.secondaryMarker && "Player--hide-controls"}
      `}>
        {!secondaryMarker &&
          <div className="Player__controls">
            <button
              onClick={() => {
                artist.toggleAudio()
                this.props.focus()
              }}
              className={`Player__controls__button ${
                artist.isPlaying && "Player__controls__button--isPlaying"}`}
              disabled={!artist.canPlay}
            />
            <div className="Player__controls__time">
              {artist.canPlay ?
                secondsParse(artist[artist.isPlaying ? "currentTime" : "duration"])
                :
                this.props.hideArrow ?
                  <FormattedMessage id="Player.loading" />
                  :
                  artist.city === "spb" ?
                    "загрузка"
                    :
                    "loading"
              }
            </div>
          </div>
        }

        {!this.props.secondaryMarker &&
          <Ticker
            className="Player__ticker"
            text={`${artist.title} — ${artist.name} ${artist.additional || ''}`}
          />}

        {!this.props.hideArrow &&
          <Link
            to={`/artist/${artist.id}`}
            onClick={() => this.props.focus?.()}
            disabled={secondaryMarker}
          >
            <div className="Player__arrow" />
          </Link>
        }

        <div
          className="Player__bar"
          style={{ width: `${artist.currentTime / artist.duration * 100}%`}}
        />
      </div>
    )
  }
}


export default Player