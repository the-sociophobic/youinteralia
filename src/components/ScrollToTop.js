import React from 'react'

import { withRouter } from 'react-router-dom'


class ScrollToTop extends React.Component {

  componentDidUpdate = prevProps =>
    this.props.location !== prevProps.location &&
      this.props?.scrollRef?.current?.scrollTo(0, 0)

  render = () =>
    this.props.children
}


export default withRouter(ScrollToTop)