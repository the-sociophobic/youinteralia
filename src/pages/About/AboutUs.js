import React from 'react'

import ExternalLink from 'components/ExternalLink'
import { FormattedMessage } from 'components/Store'


class About extends React.Component {
  render = () =>
    <div className="AboutUs">

      <div className="AboutUs__second-block">
        <div className="AboutUs__second-block__title">
          <FormattedMessage id="About.aboutUs.second.team" />
        </div>
        <div className="AboutUs__second-block__columns">
          <div className="AboutUs__second-block__columns__item">
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.curators" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.designer" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.developer" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.sponsor" />
            </div>

          </div>
          <div className="AboutUs__second-block__columns__item">
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.alina" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.lera" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.arina" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <FormattedMessage id="About.aboutUs.second.lev" />
            </div>
            <div className="AboutUs__second-block__columns__item__row">
              <ExternalLink
                className="AboutUs__logo"
                to="https://prohelvetia.ru/en/"
                newTab
              />
            </div>
          </div>
        </div>
      </div>

      <div className="AboutUs__third-block">
        <div className="AboutUs__third-block__title">
          <FormattedMessage id="About.aboutUs.second.sponsor" />
        </div>
        <ExternalLink
          className="AboutUs__logo"
          to="https://prohelvetia.ru/en/"
          newTab
        />
      </div>

    </div>
}


export default About
