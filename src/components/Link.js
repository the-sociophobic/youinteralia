import React from 'react'

import { StoreContext } from 'components/Store'


class Link extends React.Component {
  
  static contextType = StoreContext

  render = () =>
    <div
      className={`Link ${this.props.className}`}
      onClick={() => {
        this.context.setURL(this.props.to)
        this?.props?.onClick?.()
      }}
    >
      {this.props.children}
    </div>
}


export default Link