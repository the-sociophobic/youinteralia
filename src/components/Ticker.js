import React from 'react'

import ResizeObserver from 'resize-observer-polyfill'


class Ticker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tickerWidth: 0,
      contentWidth: 0,
      currentContentOffset: 0,
      startTimeStamp: 0,
    }

    this.tickerRef = React.createRef()
    this.contentRef = React.createRef()    
  }

  updateTickerWidth = () =>
    this.setState({
      tickerWidth: this.tickerRef?.current?.clientWidth,
    })
    

  updateContentWidth = () =>
    this.setState({
      contentWidth: this.contentRef?.current?.scrollWidth
    })

  componentDidMount = () => {
    this.tickerResizeObs = new ResizeObserver(this.updateTickerWidth.bind(this))
      .observe(this.tickerRef.current)

    this.contentResizeObs = new ResizeObserver(this.updateContentWidth.bind(this))
      .observe(this.contentRef.current)

    this.animationFrameId = requestAnimationFrame(this.animate)
  }

  componentWillUnmount = () =>
    this.animationFrameId && window.cancelAnimationFrame(this.animationFrameId)

  animate = timeStamp => {
    if (this.state.contentWidth < this.state.tickerWidth) {
      this.setState({
        currentContentOffset: 0,
        startTimeStamp: timeStamp,
      })
      return
    }

    const timePassed = (timeStamp - this.state.startTimeStamp) / 25

    this.setState({
      currentContentOffset: timePassed > this.state.contentWidth + this.state.tickerWidth / 4 ? 0 : timePassed,
      startTimeStamp: timePassed > this.state.contentWidth + this.state.tickerWidth / 2 ? timeStamp : this.state.startTimeStamp
    })

    this.animationFrameId = window.requestAnimationFrame(this.animate)
  }

  render = () =>
    <div
      ref={this.tickerRef}
      className={`Ticker ${this.props.className}`}
    >
      <div
        ref={this.contentRef}
        style={{ left: `-${this.state.currentContentOffset}px` }}
        className="Ticker__content"
      >
        {this.props.text}
      </div>
    </div>
}


export default Ticker