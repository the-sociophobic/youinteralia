import React from 'react'

import _ from 'lodash'
import { withRouter } from 'react-router-dom'

import { FormattedMessage } from 'components/Store'
import { StoreContext } from 'components/Store'
import Link from 'components/CustomLink'
import Item from './Item'
import isRussian from 'utils/isRussian'

import items from './items'


const blatnye = ["Мартина Махлер", "Martina Mächler", "Андреа Мариони", "Andrea Marioni"]

const tags = Array.from(
  new Set(
    [blatnye, ...items]
      .reduce((a, b) =>
        [...(a.tags || a), ...b.tags])))


class Archive extends React.Component {
  state = {
    selectedTags: [],
    searchPressed: false,
    openedItem: null,
  }

  static contextType = StoreContext

  getTags = () =>
    tags.filter(tag =>
      this.context.locale === "rus" ?
        isRussian(tag) : !isRussian(tag))

  getSelectedTags = () =>
    this.state.selectedTags.filter(tag =>
      this.context.locale === "rus" ?
        isRussian(tag) : !isRussian(tag))

  renderAbout = () =>
    <div className="Archive__about">
      <div className="Archive__about__title">
        <FormattedMessage id="Archive.title" />
      </div>
      <div className="Archive__about__desc">
        <FormattedMessage id="Archive.desc" />
      </div>
    </div>

  renderAboutDesctop = () =>
    this.props.location.pathname.includes("about") &&
      <Link to="/archive/gallery">
        <div className="Archive__about-desktop">
          <div className="Archive__about-desktop__title">
            <FormattedMessage id="Archive.title" />
          </div>
          <div className="Archive__about-desktop__browse">
            <FormattedMessage id="Archive.browse" />
            <div className="Archive__about-desktop__browse__magnifier" />
          </div>
        </div>
      </Link>

  renderSearch = () =>
    <div
      onClick={() =>
        this.setState({
          searchPressed: !this.state.searchPressed })}
      className={`
        Archive__search
        ${this.getSelectedTags().length > 0 && "Archive__search--tags"}
        ${(this.getSelectedTags().length === 0 && !this.state.searchPressed) && "Archive__search--full"}
        ${this.context.hideMenu && "Archive__search--hide"}
        ${this.props.location.pathname.includes("about") && "Archive__search--hide-desktop"}
      `}
    >
      <div className="Archive__search__magnifier" />

      <div
        className="Archive__search__browse"
      >
        <FormattedMessage id="Archive.browse" />
      </div>
    </div>

  renderTags = () =>
    <div className="Archive__tags">
      {this.getTags().map(tag =>
        <div
          className={`
            Archive__tags__item
            ${this.getSelectedTags().includes(tag) && "Archive__tags__item--selected"}
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

  renderNothing = () => {
    const artists = this.getSelectedTags()
      .filter(tag => tag.includes(" "))

    if (artists.length !== 1 || !artists.some(artist => blatnye.includes(artist)))
      return <div className="Archive__gallery__nothing">
          <FormattedMessage id="Archive.nothing" />
        </div>

    return <div className="Archive__gallery__nothing">
      no result. find out about artist below<br />
      {artists[0] === "Martina Mächler" || artists[0] === "Мартина Махлер" ?
        <Link to="/artist/6">
          Martina Mächler
        </Link>
        :
        <Link to="/artist/4">
          Andrea Marioni
        </Link>
      }
    </div>
  }

  renderGallery = () => {
    const filteredItems = items
      .filter(item =>
        this.getSelectedTags().length === 0 ||
        this.getSelectedTags().every(tag => item.tags.includes(tag)))
    const filteredMappedItems = filteredItems
      .map((item, index) =>
        <Item
          item={item}
          opened={item.link === this.state?.openedItem?.link}
          setItem={() => {
            this.setState({ openedItem: item })
            this.context.setHideMenu(true)
          }}
          close={() => {
            this.setState({ openedItem: undefined })
            this.context.setHideMenu(false)
          }}
          prev={index === 0 ? null : () => this.setState({ openedItem: filteredItems[index - 1] })}
          next={index === filteredItems.length - 1 ? null : () => this.setState({ openedItem: filteredItems[index + 1] })}
        />)
      .slice(0, 42)
    const third = Math.round(filteredMappedItems.length / 3)
    const half = Math.round(filteredMappedItems.length / 2)

    return (
      <div className={`
        Archive__gallery
        ${this.props.location.pathname.includes("about") && "Archive__gallery--hide"}
      `}>
        {filteredMappedItems.length === 0 &&
          this.renderNothing()}
        <div className="Archive__gallery__col desktop-only">
          {filteredMappedItems.slice(third * 2)}
        </div>
        <div className="Archive__gallery__col desktop-only">
          {filteredMappedItems.slice(third, third * 2)}
        </div>
        <div className="Archive__gallery__col desktop-only">
          {filteredMappedItems.slice(0, third)}
        </div>

        <div className="Archive__gallery__col mobile-only">
          {filteredMappedItems.slice(0, half)}
        </div>
        <div className="Archive__gallery__col mobile-only">
          {filteredMappedItems.slice(half)}
        </div>
      </div>
    )
  }

  renderDesc = () =>
    <div className={`
      Archive__right__desc
      ${this.props.location.pathname.includes("about") && "Archive__right__desc--show"}
    `}>
      <FormattedMessage id="Archive.desc" />
    </div>

  showTags = () =>
    this.state.searchPressed ||
    (window.innerWidth >= 1200 && this.props.location.pathname.includes("gallery"))

  render = () =>
    <div className="Archive">
      <div className="Archive__left">
        {this.renderAbout()}
        {this.renderAboutDesctop()}
        {this.showTags() && this.renderTags()}
      </div>
        {this.renderSearch()}
      <div className={`
        Archive__right
        ${(this.getSelectedTags().length > 0 && !this.state.searchPressed) && "Archive__right--visible"}
      `}>
        {this.renderGallery()}
        {this.renderDesc()}
      </div>
    </div>
}


export default withRouter(Archive)