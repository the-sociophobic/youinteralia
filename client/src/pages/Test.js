import React from 'react'

import { withRouter } from 'react-router-dom'

import { StoreContext } from 'components/Store'


class Test extends React.Component {

  static contextType = StoreContext

  componentDidMount = () => {
    this.context.startTesting()
    this.props.history.push("/")
  }

  render = () =>
    <div className="Test">
      Loading...
    </div>
}


export default withRouter(Test)
