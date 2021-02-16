import React from 'react'


class Link extends React.Component {
  render = () =>
    <div
      className={`Link ${this.props.className}`}
      onClick={() => {}}
    >
      {this.props.children}
    </div>
}


export default Link