import React from 'react'

import _ from 'lodash'
import { withRouter } from 'react-router-dom'

import { FormattedMessage } from 'components/Store'
import { StoreContext } from 'components/Store'
import Link from 'components/CustomLink'
import Footer from 'components/Footer'
import Item from './Item'
import isRussian from 'utils/isRussian'

import items from './items'


const blatnye = ["Мартина Махлер", "Martina Mächler", "Андреа Мариони", "Andrea Marioni"]

// const tags = Array.from(
//   new Set(
//     [blatnye, ...items]
//       .reduce((a, b) =>
//         [...(a.tags || a), ...b.tags])))
//         console.log(tags)
const tags = [
  "Андреа Мариони",
  "Andrea Marioni",
  "блуждание",
  "walking around",
  "поэзия",
  "poetry",
  "Carla Demierre",
  "Карла Демьер",
  "музыка",
  "music",
  "Françoise Caraco",
  "Франсуаз Карако",
  "эскиз",
  "sketch",
  "воспоминание",
  "recollection",
  "Alena Tereshko",
  "Алена Терешко",
  "остров",
  "island",
  "Ivan Kurbakov",
  "Иван Курбаков",
  "Ольга Житлина",
  "стрит-арт",
  "Мартина Махлер",
  "Martina Mächler",
  "в поисках чудесного",
  "Olga Jitlina",
  "in search of the miraculous",
  "Roman Osminkin",
  "Роман Осминкин",
  "street art",
]


class Archive extends React.Component {
  state = {
    selectedTags: [],
    searchPressed: false,
    openedItem: null,
  }

  static contextType = StoreContext

  componentDidMount = () => {
    this.updateCurrentIdFromURL()
    this.context.setHideBigMenuClose(true)
  }

  componentDidUpdate = prevProps =>
    this.props.location !== prevProps.location &&
      this.updateCurrentIdFromURL()

  updateCurrentIdFromURL = () => {
    const id = parseInt(
      this.props.location.pathname
        .replace('/archive/', '')
        .replace('/', ''))

    if (id === 0 || typeof id !== "number")
      return
      
    const currentItemIndex = items.map(item => item.id).indexOf(id)
    const currentItem = items[currentItemIndex]

    if (currentItem) {
      this.setState({
        selectedTags: this.state.selectedTags.length > 0 ?
          this.state.selectedTags
          :
          currentItem?.tags,
        openedItem: currentItem,
      })
      this.context.setHideMenu(true)
    }
  }

  getTags = () =>
    tags.filter(tag =>
      this.context.locale === "rus" ?
        isRussian(tag) : !isRussian(tag))

  getSelectedTags = () =>
    this.state.selectedTags.filter(tag =>
      this.context.locale === "rus" ?
        isRussian(tag) : !isRussian(tag))

  renderAbout = () =>
    (!this.state.searchPressed && this.getSelectedTags().length === 0) &&
      <div className=''>
        <div className="Archive__about">
          <div className="Archive__about__desc">
            <FormattedMessage id="Archive.desc" />
          </div>
        </div>
      </div>

  renderAboutDesktop = () =>
    !this.state.searchPressed &&
      <div
        className="Archive__about-desktop"
        onClick={() => {
          this.setState({ searchPressed: true })
          this.context.setHideBigMenuClose(false)
        }}
      >
        <div className="Archive__about-desktop__title">
          <FormattedMessage id="Archive.title" />
        </div>
        <div className="Archive__about-desktop__browse">
          <FormattedMessage id="Archive.browse" />
          <div className="Archive__about-desktop__browse__magnifier" />
        </div>
      </div>

  renderSearch = () =>
    <div
      onClick={() => {
        this.context.setHideBigMenuClose(this.state.searchPressed)
        this.setState({ searchPressed: !this.state.searchPressed })}
      }
      className={`
        Archive__search
        ${ this.getSelectedTags().length > 0 && "Archive__search--tags"}
        ${(this.getSelectedTags().length === 0 && !this.state.searchPressed) && "Archive__search--full"}
        ${ this.state.openedItem && "Archive__search--hide"}
        ${!this.state.searchPressed && "Archive__search--hide-desktop"}
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
    this.state.searchPressed &&
      <div className="Archive__tags__container">
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
      </div>

  toggleTag = tag => {
    const { selectedTags } = this.state
    const tagIndex = selectedTags.indexOf(tag)

    this.setState({
      selectedTags: tagIndex === -1 ?
        [...selectedTags, tag]
        :
        selectedTags.filter(elem => elem !== tag),
      openedItem: null,
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
      <FormattedMessage id='Archive.findOut' /><br />
      <Link to="/artist/6">
        Martina Mächler
      </Link>
    </div>
  }

  renderGallery = () => {
    const filteredItems = items
      .filter(item =>
        this.getSelectedTags().length === 0 ||
        this.getSelectedTags().some(tag => item.tags.includes(tag)))
    const filteredMappedItems = filteredItems
      .map((item, index) =>
        <Item
          item={item}
          opened={item.link === this.state?.openedItem?.link}
          setItem={() => {
            this.setState({ openedItem: item })
            this.context.setHideMenu(true)
            this.props.history.push(`/archive/${item.id}`)
          }}
          close={() => {
            this.setState({ openedItem: undefined })
            this.context.setHideMenu(false)
          }}
          prev={index === 0 ? null : () => {
            this.setState({ openedItem: filteredItems[index - 1] })
            this.props.history.push(`/archive/${filteredItems[index - 1].id}`)
          }}
          next={index === filteredItems.length - 1 ? null : () => {
            this.setState({ openedItem: filteredItems[index + 1] })
            this.props.history.push(`/archive/${filteredItems[index + 1].id}`)
          }}
        />)
      .slice(0, 42)

    return (
      <div className={`
        Archive__gallery
        ${this.getSelectedTags().length === 0 && "Archive__gallery--hide"}
      `}>
        {filteredMappedItems.length === 0 &&
          this.renderNothing()}
        <div className="Archive__gallery__col desktop-only">
          {filteredMappedItems.filter((item, index) => index % 3 === 0)}
        </div>
        <div className="Archive__gallery__col desktop-only">
          {filteredMappedItems.filter((item, index) => index % 3 === 1)}
        </div>
        <div className="Archive__gallery__col desktop-only">
          {filteredMappedItems.filter((item, index) => index % 3 === 2)}
        </div>

        <div className="Archive__gallery__col mobile-only">
          {filteredMappedItems.filter((item, index) => index % 2 === 0)}
        </div>
        <div className="Archive__gallery__col mobile-only">
          {filteredMappedItems.filter((item, index) => index % 2 === 1)}
        </div>
      </div>
    )
  }

  renderDesc = () =>
    <div className={`
      Archive__right__desc
      ${this.getSelectedTags().length === 0 && "Archive__right__desc--show"}
    `}>
      <FormattedMessage id="Archive.desc" />
    </div>


  render = () =>
    <div className="Archive">
      <div className="Archive__left">
        <div className='Archive__left__container'>
          {this.renderAbout()}
          {this.renderAboutDesktop()}
          {this.renderTags()}
        </div>
        {!this.state.searchPressed && <Footer />}
      </div>
        {this.renderSearch()}
      <div className={`
        Archive__right
        ${this.getSelectedTags().length > 0 && "Archive__right--visible--desktop"}
        ${(this.getSelectedTags().length > 0 && !this.state.searchPressed) && "Archive__right--visible--mobile"}
      `}>
        {this.renderGallery()}
        {this.renderDesc()}
      </div>
    </div>
}


export default withRouter(Archive)