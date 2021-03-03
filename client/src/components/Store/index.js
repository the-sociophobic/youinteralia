import React from 'react'

import _ from 'lodash'

import flatten from 'utils/flatten'
import getAttribsFromFlatten from 'utils/getAttribsFromFlatten'
import addNewLines from 'utils/addNewLines'
import arrayToLocale from './arrayToLocale'
import defaultMessages from './defaultMessages'
import artists from './artists'


const determineStorage = _this =>
  _this?.state?.hasOwnProperty("setLocale") ? _this.state : _this.context

const getMessage = (_this, id) =>
  determineStorage(_this).messages[id] || ""


const StoreContext = React.createContext("messages")


class StoreProvider extends React.Component {
  constructor(props) {
    super(props)

    const locale = props.locale || "rus"
    this.parsedMessages = arrayToLocale(flatten(defaultMessages))
    
    // ADD AUDIO TO ARTISTS CONSTANTS
    this.artistsConstants = artists.map((artist, index) => {
      const id = index
      let audio = new Audio()
      
      audio.addEventListener('canplay',
        () => this.setState({
          [`${id}.duration`]: audio.duration,
          [`${id}.canPlay`]: true,
        }))
      audio.addEventListener('canplay',
        () => this.setState({
          [`${id}.duration`]: audio.duration,
          [`${id}.canPlay`]: true,
        }))

      audio.addEventListener('play', () => {
        this.artistsConstants.forEach(artist =>
          artist.id !== id && artist.audio.pause())

        this.setState({
          [`${id}.isPlaying`]: true,
        })
      })

      audio.addEventListener('pause', () => this.setState({
        [`${id}.isPlaying`]: false,
      }))

      audio.addEventListener('timeupdate', () =>
        this.setState({
          [`${id}.currentTime`]: audio.currentTime
        }))

      audio.addEventListener('ended', () => {
        audio.pause()
        audio.currentTime = 0
        this.setState({
          [`${id}.isPlaying`]: false
        })
      })

      audio.preload = 'auto'

      return {
        ...artist,
        id: id,
        audio: audio
      }
    })
    // ADD AUDIO TO ARTISTS CONSTANTS END

    //ADD ARTISTS STATE
    const artistsState = this.artistsConstants
      .map(artist => ({
        [`${artist.id}.currentTime`]: 0,
        [`${artist.id}.isPlaying`]: false,
        [`${artist.id}.canPlay`]: false,
      }))
      .reduce((a, b) => ({...a, ...b}))
    //ADD ARTISTS STATE END

    this.state = {
      locale: locale,
      messages: this.parsedMessages[locale],
      setLocale: _locale => this.setState({
        locale: _locale,
        messages: this.parsedMessages[_locale],
      }),

      menuOpened: false,
      setMenu: _menuOpened => this.setState({
        menuOpened: _menuOpened
      }),

      currentCity: parseInt(window.location.pathname.replace('/artist/', '')) > 3 ? "gen" : "spb",
      setCity: _currentCity => this.setState({
        currentCity: _currentCity
      }),

      ...artistsState,
      artistsConstants: this.artistsConstants, //StoreProvider doesn't provide this. (((

      mapLoaded: false,
      mapsLoaded: 0,
      setMapLoaded: () => {
        if (!this.state.mapLoaded) {
          this.setState({
            mapsLoaded: this.state.mapsLoaded + 1,
          })
          if (this.state.mapsLoaded === 4) {
            console.log("map loaded")
            this.startLoadingAudio()
            this.setState({
              mapLoaded: true
            })    
          }
        }
      }
    }
  }

  componentDidMount = () => {
    window.onpopstate = this.onPopState.bind(this)
    window.onpushstate = this.onPushState.bind(this)
  }

  onPopState = e => {
    if (window.location.pathname.includes('artist'))
      this.setState({
        currentCity: parseInt(window.location.pathname.replace('/artist/', '')) > 3 ? "gen" : "spb"
      })
  }

  onPushState = e => {
    // console.log(e)
    this.setState({
      menuOpened: false
    })
  }

  startLoadingAudio = () =>
    this.artistsConstants.forEach(artist => {
      artist.audio.src = artist.src
      artist.audio.load()
    })

  render = () =>
    <StoreContext.Provider value={this.state}>
      {this.props.children}
    </StoreContext.Provider>
}


class FormattedMessage extends React.Component {
  static contextType = StoreContext

  render = () =>
    addNewLines(
      getMessage(this, this.props.id))
}


const getArtist = (_this, id, locale) => {
  const artistAudio = determineStorage(_this).artistsConstants[parseInt(id)].audio

  return {
    ...getAttribsFromFlatten(determineStorage(_this), id),
    ..._.mapValues(
        determineStorage(_this).artistsConstants[id]
        ,
        (value, key) =>
          Array.isArray(value) && key !== "multiplePoints" ?
            value[
              locale ?
                locale === "rus" ? 0 : 1
                :
                determineStorage(_this).locale === "rus" ? 0 : 1
              ]
            :
            value
      ),
    toggleAudio: () => artistAudio.paused ? artistAudio.play() : artistAudio.pause()
  }
}

const getArtists = (_this, city, locale) =>
  determineStorage(_this).artistsConstants
    .filter(artist => !city || artist.city === city)
    .map(artist => getArtist(_this, artist.id, locale))



export {
  StoreContext,
  StoreProvider,
  FormattedMessage,
  getMessage,

  getArtist,
  getArtists,
}