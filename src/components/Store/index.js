import React from 'react'
import _, { toInteger } from 'lodash'

import clamp from 'utils/clamp'
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

    const URL = window.location.pathname
    // const history = window.localStorage.getItem('history') || [window.location.pathname]
    // const currentHistoryIndex = window.localStorage.getItem('currentHistoryIndex') || 0

    this.state = {
      locale: locale,
      messages: this.parsedMessages[locale],
      setLocale: _locale => this.setState({
        locale: _locale,
        messages: this.parsedMessages[_locale],
      }),
      // getMessage: id => getMessage(this, id),

      URL: URL,
      setURL: (_URL = "", pushHistory = true) => {
        if (_URL === this.state.URL)
          return

        const artist = _URL.includes("/artist") && getArtist(this, _URL.split("t/")[1])

        console.log(_URL)
        this.setState({
          URL: _URL,
          menuOpened: false,
        })

        // if (pushHistory)
        //   this.setState({
        //     history: [...this.state.history.slice(0, this.state.currentHistoryIndex + 1), _URL.replace(':', '/')],
        //     currentHistoryIndex: this.state.currentHistoryIndex + 1,
        //   })

        if (artist) {
          this.setState({ currentCity: artist.city })
          // this.props.mapRef?.current?.[`${artist.city}Ref`]?.
        }

        if (pushHistory)
          window.history.pushState(this.state.history, 'youinteralia', _URL)
      },
      // history: history,
      // currentHistoryIndex: currentHistoryIndex,

      zoom: 0,
      setZoom: zoom => this.setState({
        zoom: zoom
      }),

      menuOpened: false,
      setMenu: _menuOpened => this.setState({
        menuOpened: _menuOpened
      }),

      currentCity: "spb",
      setCity: _currentCity => this.setState({
        currentCity: _currentCity
      }),

      ...artistsState,
      artistsConstants: this.artistsConstants, //StoreProvider doesn't provide this. (((
    }
  }

  componentDidMount = () => {
    this.artistsConstants.forEach(artist => {
      artist.audio.src = artist.src
      artist.audio.load()
    })

    window.onpopstate = this.onPopState.bind(this)
    window.onpushstate = this.onPushState.bind(this)


  }

  onPopState = e => {
    // const newIndex = clamp(this.state.currentHistoryIndex - 1, 0, e.length)
    console.log(e)
    
    this.state.setURL(e.state && e.state.length > 1 ? e.state[e.state.length - 1] : "", false)

    // this.setState({
    //   currentHistoryIndex: newIndex
    // })
  }

  onPushState = e => {
    // const newIndex = clamp(this.state.currentHistoryIndex + 1, 0, e.length)

    this.state.setURL(e.state[e.state.length - 1], false)

    // this.setState({
    //   currentHistoryIndex: newIndex
    // })
  }

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
  const artistAudio = determineStorage(_this).artistsConstants[toInteger(id)].audio

  return {
    ...getAttribsFromFlatten(determineStorage(_this), id),
    ..._.mapValues(
        determineStorage(_this).artistsConstants[id]
        ,
        (value, key) =>
          Array.isArray(value) ?
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