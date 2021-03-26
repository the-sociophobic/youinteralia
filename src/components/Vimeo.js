import React from 'react'
import Vimeo_ from 'react-vimeo'


class Vimeo extends React.Component {

  render = () =>
    this.props.thumbnail ?
      <div className='Vimeo Vimeo--thumbnail'>
        <img
          src={this.props.thumbnail}
          alt=""
          className="Vimeo__thumbnail"
        />
      </div>
      :
      <Vimeo_
        videoId={this.props.src}
        autoplay={true}
      />
}


export default Vimeo