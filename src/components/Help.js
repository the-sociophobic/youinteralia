import React from 'react'

import { StoreContext, FormattedMessage } from 'components/Store'


class Help extends React.Component {
  state = {
    opened: false
  }

  static contextType = StoreContext

  componentDidMount = () =>
    this.setState({ opened: true })

  render = () =>
    <div className={`Help ${this.state.opened && 'Help--opened'}`}>
      <div className='Help__text'>
        <FormattedMessage id='Help.text' />
      </div>
      <button
        className='Help__button'
        onClick={() => {
          this.setState({ opened: false })
          this.context?.spbRef?.current?.zoom?.(-1)
          this.context?.genRef?.current?.zoom?.(-1)
        }}
      >
        <FormattedMessage id='Help.button' />
      </button>
    </div>
}


export default Help