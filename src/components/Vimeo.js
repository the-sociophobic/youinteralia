import React from 'react'
import Vimeo_ from 'react-vimeo'


class Vimeo extends React.Component {

render = () =>
  this.props.thumbnail ?
  <img
    src={this.props.thumbnail}
    alt=""
    className="Vimeo__thumbnail"
  />
  :
  <Vimeo_
    videoId={this.props.src}
  />
}


export default Vimeo