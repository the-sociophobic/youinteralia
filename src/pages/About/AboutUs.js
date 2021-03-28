import React from 'react'

import Img from 'components/Img'
import Link from 'components/CustomLink'
import {
  FormattedMessage,
  StoreContext
} from 'components/Store'

import logo from 'styles/img/logo-dark.svg'
import logoEng from 'styles/img/logo_eng-dark.svg'


class About extends React.Component {

  state = {
    leraShow: false,
    alinaShow: false,
  }

  static contextType = StoreContext

  render = () =>
    <div className="AboutUs">

      <div className="AboutUs__second-block">
        <div className="AboutUs__second-block__title">
          <FormattedMessage id="About.aboutUs.second.team" />
        </div>
        <div className="AboutUs__second-block__columns">
          <div className="AboutUs__second-block__columns__item">
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.idea" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.curators" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.designer" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.developer" />
            </div>
            <div className="AboutUs__second-block__columns__item__row d-none d-xl-block">
              <FormattedMessage id="About.aboutUs.second.sponsor" />
            </div>

          </div>
          <div className="AboutUs__second-block__columns__item">
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => this.setState({ alinaShow: true })}
              className="AboutUs__second-block__columns__item__row"
            >
              <FormattedMessage id="About.aboutUs.second.alina" />
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => this.setState({ alinaShow: true })}
              className="AboutUs__second-block__columns__item__row"
            >
              <FormattedMessage id="About.aboutUs.second.alina" />
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => this.setState({ leraShow: true })}
              className="AboutUs__second-block__columns__item__row"
            >
              <FormattedMessage id="About.aboutUs.second.lera" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.arina" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.lev" />
            </div>
            <div className="AboutUs__second-block__columns__item__row d-none d-xl-block">
              <Link
                to="https://prohelvetia.ru/en/"
                newTab
              >
                <FormattedMessage id="About.aboutUs.second.prohelvetia" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="AboutUs__third-block">
        <div className="AboutUs__third-block__title">
          <FormattedMessage id="About.aboutUs.second.sponsor" />
        </div>
        <Link
          to="https://prohelvetia.ru/en/"
          newTab
        >
          <FormattedMessage id="About.aboutUs.second.prohelvetia" />
        </Link>
      </div>


      <div
        className={`
          AboutUs__popup
          ${!this.state.leraShow && 'AboutUs__popup--hide'}
        `}
        onClick={() => this.setState({ leraShow: false })}
      >
        <div className='AboutUs__popup__block'>
          <div
            className='AboutUs__popup__block__close'
            onClick={() => this.setState({ leraShow: false })}
          />
          <FormattedMessage id='About.aboutUs.second.leraAbout' />
        </div>
      </div>

      <div
        className={`
          AboutUs__popup
          ${!this.state.alinaShow && 'AboutUs__popup--hide'}
        `}
        onClick={() => this.setState({ alinaShow: false })}
      >
        <div className='AboutUs__popup__block'>
          <div
            className='AboutUs__popup__block__close'
            onClick={() => this.setState({ alinaShow: false })}
          />
          <FormattedMessage id='About.aboutUs.second.alinaAbout' />
        </div>
      </div>

    </div>
}


export default About
