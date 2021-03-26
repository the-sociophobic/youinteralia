import React from 'react'

import {
  browserName,
  browserVersion,
  isIE,
} from 'react-device-detect'

import Link from 'components/CustomLink'
import {
  StoreContext,
  FormattedMessage
} from './Store'


class FUCKINGDUMB extends React.Component {
  state = {
    opened: false,
    browser: undefined,
    check: false,
  }

  static contextType = StoreContext

  componentDidMount = () => {
    if (isIE
      || (browserName === 'Safari' && parseFloat(browserVersion) < 14)
      || (browserName === 'Chrome' && parseFloat(browserVersion) < 85))
    {
      // this.setState({
      //   opened: true,
      //   browser: browserName + ' ' + browserVersion
      // })
      this.context.setOldBrowser(true)
    }
  }

  render = () =>
    true ?
    ""
    :
    <div className={`FUCKINGDUMB ${!this.state.opened && 'd-none'}`}>
      <div className='FUCKINGDUMB__text'>
        <button
          className='button button--locale mb-3'
          onClick={() => this.context.setLocale(
            this.context.locale === "eng" ? "rus" : "eng")}
        >
          {this.context.locale === "eng" ? "rus" : "eng"}
        </button>
        {isIE ?
          <>
            <FormattedMessage id='FUCKINGDUMB.ie' />
            <br />
            <Link to='https://www.google.com/chrome/'><FormattedMessage id='FUCKINGDUMB.chrome' /></Link>
          </>
          :
          <>
            <FormattedMessage id='FUCKINGDUMB.text0' />{this.state.browser}<FormattedMessage id='FUCKINGDUMB.text1' />
            <br />
            <br />
            {browserName === 'Safari' &&
              <>
                <Link to='https://youtu.be/9X_5l6neGu4?t=14'>
                  <FormattedMessage id='FUCKINGDUMB.howTo' />
                </Link>
                <br />
                <br />
              </>
            }
            {browserName !== 'Chrome' &&
              <>
                <Link
                  to='https://www.google.com/chrome/'
                >
                  <FormattedMessage id='FUCKINGDUMB.chrome' />
                </Link>
                <br />
                <br />
              </>
            }
            <input
              type="checkbox"
              checked={this.state.check}
              onChange={e => this.setState({ check: e.target.value })}
            />
            <FormattedMessage id='FUCKINGDUMB.ok' />
            <br />
            <br />
            {this.state.check &&
              <button
                className='button'
                onClick={() => this.setState({ opened: false })}
              >
                <FormattedMessage id='FUCKINGDUMB.continue' />
              </button>
            }
          </>
        }
      </div>
    </div>
}


export default FUCKINGDUMB