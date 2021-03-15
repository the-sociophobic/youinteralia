import React from 'react'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import ResizeObserver from 'resize-observer-polyfill'

import Player from 'components/Player'
import Img from 'components/Img'
import {
  StoreContext,
  getArtist,
} from 'components/Store'


class Item extends React.Component {

  state = {
    width: 0,
    numberOfPages: 1,
  }

  static contextType = StoreContext

  itemRef = React.createRef()

  updateDimensions = (entries, observer) =>
    entries.forEach(entry =>
      this.setState({ width: entry.contentRect.width }))
  
  pageWidth = () =>
    this.state.width || 100

  componentDidMount = () =>
    this.resizeObs = new ResizeObserver(this.updateDimensions.bind(this))
      .observe(this.itemRef.current)

  render = () =>
    <div
      className={`Item ${this.props.opened && "Item--opened"}`}
      onClick={() => !this.props.opened && this.props?.setItem()}
      ref={this.itemRef}
    >
      {(() => {
        switch(this.props.item.type) {
          case 'img':
            return <Img src={this.props.item.link} />
          case 'pdf':
            return <Document
                    file={this.props.item.link}
                    onLoadSuccess={numberOfPages => this.setState({ numberOfPages: numberOfPages })}
                  >
                    {new Array(this.state.numberOfPages).map((page, index) =>
                      <Page
                        pageNumber={index + 1}
                        width={this.pageWidth()}
                      />
                    )}
                  </Document>
          case 'mp3':
            return <Player
                compact
                artist={getArtist(this, this.props.item.link)}
              />
        }
      })()}
      <div
        className="Item__close"
        onClick={() => this.props?.close?.()}
      />
      <div
        className="Item__prev"
        onClick={() => this.props?.prev?.()}
      />
      <div
        className="Item__next"
        onClick={() => this.props?.next?.()}
      />
    </div>
} 


export default Item