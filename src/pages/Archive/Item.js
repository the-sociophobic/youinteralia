import React from 'react'

import ResizeObserver from 'resize-observer-polyfill'
import BandcampPlayer from 'react-bandcamp'

import Img from 'components/Img'
import { FormattedMessage, StoreContext } from 'components/Store'
import Link from 'components/CustomLink'
import Youtube from 'components/Youtube'
import Vimeo from 'components/Vimeo'


class Item extends React.Component {
  state = { width: 0 }

  static contextType = StoreContext

  itemRef = React.createRef()      
  
  componentDidMount = () =>
    this.resizeObs = new ResizeObserver(
      () =>
        this.setState({
          width: this.itemRef?.current?.children[0]?.offsetWidth || this.itemRef?.current?.offsetWidth
        }))
      .observe(this.itemRef.current)

  render = () =>
    <div
      className={`Item ${this.props.opened && "Item--opened"}`}
      onClick={() => !this.props.opened && this.props?.setItem()}
      ref={this.itemRef}
    >
      {(() => {
        const { item } = this.props

        switch(item.type) {
          case 'img':
            return <Img src={item.link} />
          case 'pdf':
            return <Link
                external
                to={item.link}
                newTab
                disabled={!this.props.opened}
              >
                <Img
                  src={item.preview}
                  className='Img--PDF'
                >
                  {this.props.opened &&
                    <div className='Img--PDF__atop'>
                      {item.tags[this.context.locale === 'rus' ? 0 : 1]}
                      <br />
                      <FormattedMessage id='Archive.readPDF' />
                    </div>
                  }
                </Img>
              </Link>
          case 'youtube':
            return <Youtube
                thumbnail={!this.props.opened}
                src={item.link}
              />
          case 'vimeo':
            return <Vimeo
                thumbnail={!this.props.opened && item.thumbnail}
                src={item.link}
              />
          case 'bandcamp':
            if (this.props.opened)
              return <BandcampPlayer album={item.album} />
            return <Img src={item.preview} />
          default:
            return <></>
        }
      })()}

      <div
        className="Item__close"
        onClick={() => this.props?.close?.()}
      />
      {this.props.prev &&
        <div
          className="Item__prev"
          onClick={() => this.props?.prev?.()}
        />}
      {this.props.next &&
        <div
          className="Item__next"
          onClick={() => this.props?.next?.()}
        />}
    </div>
} 


export default Item