import React from 'react'

import { withRouter } from 'react-router-dom'

import { StoreContext, FormattedMessage } from 'components/Store'


class Help extends React.Component {
  state = {
    opened: false
  }

  static contextType = StoreContext

  componentDidMount = () =>
    this.setState({ opened: true })

  render = () =>
    this.props.location.pathname === '/' &&
      <div className={`Help desktop-only ${this.state.opened && 'Help--opened'}`}>
        <div className='Help__text'>
          <FormattedMessage id='Help.text' />
        </div>
        <button
          className='Help__button'
          onClick={() => {
            this.setState({ opened: false })
            // this.context?.spbRef?.current?.zoom?.(-1)
            // this.context?.genRef?.current?.zoom?.(-1)
          }}
        >
          <FormattedMessage id='Help.button' />
        </button>
      </div>
}


export default withRouter(Help)