import React from 'react'


class Img extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }

    if (props.src) {
      this.img = new Img()
      this.img.onload = () => this.setState({ loaded: true })
      this.img.src = props.src
    }
  }

  render = () =>
    <div className={`lev-img ${this.props.className}`}>
      <img
        alt=""
        src={this.props.src}
        className="lev-img__img"
      />
    </div>
}


export default Img