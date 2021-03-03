import React from 'react'

import ExternalLink from 'components/ExternalLink'
import { FormattedMessage } from 'components/Store'


class About extends React.Component {
  render = () =>
    <div className="About">

      <div className="About__first-block">
        <div className="About__first-block__title">
          <FormattedMessage id="About.first.title" />
        </div>
        <div className="About__first-block__body">
          <FormattedMessage id="About.first.body" />
        </div>
      </div>
      <div className="About__second-block">
        <div className="About__second-block__title">
          <FormattedMessage id="About.second.team" />
        </div>
        <div className="About__second-block__columns">
          <div className="About__second-block__columns__item">
            <div className="About__second-block__columns__item__row">
              <FormattedMessage id="About.second.curators" />
            </div>
            <div className="About__second-block__columns__item__row">
              <FormattedMessage id="About.second.designer" />
            </div>
            <div className="About__second-block__columns__item__row">
              <FormattedMessage id="About.second.developer" />
            </div>
            <div className="About__second-block__columns__item__row">
              <FormattedMessage id="About.second.sponsor" />
            </div>

          </div>
          <div className="About__second-block__columns__item">
            <div className="About__second-block__columns__item__row">
              <FormattedMessage id="About.second.alina" />
            </div>
            <div className="About__second-block__columns__item__row">
              <FormattedMessage id="About.second.lera" />
            </div>
            <div className="About__second-block__columns__item__row">
              <FormattedMessage id="About.second.arina" />
            </div>
            <div className="About__second-block__columns__item__row">
              <FormattedMessage id="About.second.lev" />
            </div>
            <div className="About__second-block__columns__item__row">
              <ExternalLink
                className="About__logo"
                to="https://prohelvetia.ru/en/"
                newTab
              />
            </div>
          </div>
        </div>
      </div>

      <div className="About__third-block">
        <div className="About__third-block__title">
          <FormattedMessage id="About.second.sponsor" />
        </div>
        <ExternalLink
          className="About__logo"
          to="https://prohelvetia.ru/en/"
          newTab
        />
      </div>

    </div>
}


export default About
