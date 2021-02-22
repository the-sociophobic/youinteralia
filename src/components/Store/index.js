import React from 'react'

import flatten from 'utils/flatten'
import addNewLines from 'utils/addNewLines'
import arrayToLocale from './arrayToLocale'
import defaultMessages from './defaultMessages'
import artists from './artists'


const StoreContext = React.createContext("messages")

class StoreProvider extends React.Component {
  constructor(props) {
    super(props)

    const locale = props.locale || "rus"
    this.parsedMessages = arrayToLocale(flatten(defaultMessages))
    
    this.state = {
      locale: locale,
      messages: this.parsedMessages[locale],
      setLocale: _locale => this.setState({
        locale: _locale,
        messages: this.parsedMessages[_locale],
      }),

      artists: artists,

      URL: "",
      setURL: _URL => this.setState({
        URL: _URL,
      }),

      zoom: 0,
      setZoom: zoom => this.setState({
        zoom: zoom
      })
    }
  }

  render = () =>
    <StoreContext.Provider value={this.state}>
      {this.props.children}
    </StoreContext.Provider>
}

const getMessage = (_this, id) =>
  _this.context.messages[id] || ""

class FormattedMessage extends React.Component {
  static contextType = StoreContext

  render = () =>
    addNewLines(
      getMessage(this, this.props.id))
}

export {
  StoreContext,
  StoreProvider,
  getMessage,
  FormattedMessage,
}