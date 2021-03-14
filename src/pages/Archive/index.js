import React from 'react'

import _ from 'lodash'

import { FormattedMessage } from 'components/Store'
import Img from 'components/Img'
import Player from 'components/Player'
import {
  StoreContext,
  getArtist,
} from 'components/Store'

import tags from './tags'
import items from './items'


class Archive extends React.Component {
  state = {
    selectedTags: [],
    zoomPressed: true,
  }

  static contextType = StoreContext

  renderAbout = () =>
    <div className="Archive__about">
      <div className="Archive__about__title">
        <FormattedMessage id="Archive.title" />
      </div>
      <div className="Archive__about__desc">
        <FormattedMessage id="Archive.desc" />
      </div>
    </div>

  renderZoom = () =>
    <div className="Archive__zoom">
      <div className={`Archive__zoom__`}>

      </div>

      <div
        className="Archive__zoom__"
        onClick={() => this.setState({ zoomPressed: !this.state.zoomPressed })}
      />
    </div>

  renderTags = () =>
    <div className="Archive__tags">
      {tags.map(tag =>
        <div
          className={`
            Archive__tags__item
            ${this.state.selectedTags.includes(tag) && "Archive__tags__item--selected"}
          `}
          onClick={() => this.toggleTag(tag)}
        >
          {tag}
        </div>
      )}
    </div>

  toggleTag = tag => {
    const { selectedTags } = this.state
    const tagIndex = selectedTags.indexOf(tag)


    this.setState({
      selectedTags: tagIndex === -1 ?
        [...selectedTags, tag]
        :
        selectedTags.filter(elem => elem !== tag)
    })
  }

  renderContent = () =>
    <div className="Archive__content">
      {items
        .filter(item =>
          this.state.selectedTags.length === 0 ||
          _.intersection(item.tags, this.state.selectedTags).length > 0)
        .map(item =>
          <div className="Archive__content__item">
            {item.type === "img" ?
              <Img
                src={item.link}
              />
              :
              <Player
                artist={getArtist(this, item.link)}
                compact
                hideArrow
              />
            }
          </div>
        )
      }
    </div>

  renderOpenedContent = () =>
    <div className="Archive__">

    </div>


  render = () =>
    <div className="Archive">
      <div className="Archive__left">
        {this.renderAbout()}
        {this.renderZoom()}
        {this.state.zoomPressed && this.renderTags()}
      </div>
      <div className="Archive__right">
        {this.renderZoom()}
      </div>
    </div>
}


export default Archive
