import React from 'react'

import { StoreContext } from 'components/Store'
import secondsParse from 'utils/secondsParse'


class Marker extends React.Component {
  state = {
    isPlaying: false,
    canPlay: false,
    duration: 0,
    currentTime: 0,
  }

  static contextType = StoreContext

  componentDidMount = () => {
    this.initializeAudio()
  }

  initializeAudio = () => {
    this.audio = new Audio()

    this.audio.addEventListener('canplay',
      () => this.setState({
        duration: this.audio.duration,
        canPlay: true,
      }))

    this.audio.addEventListener('timeupdate',
      () => this.setState({ currentTime: this.audio.currentTime }))

    // this.audio.addEventListener('ended', () => {})

    this.audio.preload = 'auto'
    this.audio.src = this.props.audio
    this.audio.load()
  }

  play = () => {
    this.audio.play()
    this.setState({ isPlaying: true })
  }

  pause = () => {
    this.audio.pause()
    this.setState({ isPlaying: false })
  }

  render = () =>
    <div className={`Marker ${
      this.context.zoom <= 12 && "Marker--small"} ${
      this.context.zoom <= 11 && "Marker--tiny"}`}>
      <div className="Marker__dot" />

      <div className="Marker__player">
        <div className="Marker__player__controls">
          <button
            onClick={() => this.state.isPlaying ? this.pause() : this.play()}
            className={`Marker__player__controls__button ${
              this.state.isPlaying && "Marker__player__controls__button--isPlaying"}`}
            disabled={!this.state.canPlay}
          />
          <div className="Marker__player__controls__time">
            {secondsParse(this.state[this.state.isPlaying ? "currentTime" : "duration"])}
          </div>
        </div>

        <div className="Marker__player__text">
          <div className="Marker__player__text__title">
            {this.props.title}
          </div>
          <div className="Marker__player__text__artist">
            {this.props.name}
          </div>
        </div>

        <div
          className="Marker__player__arrow"
          onClick={() => {}}
        />

        <div
          className="Marker__player__bar"
          style={{ width: `${this.state.currentTime / this.state.duration * 100}%`}}
        />
      </div>
    </div>
}


export default Marker