import React from 'react'

import { FormattedMessage } from 'components/Store'
import Link from 'components/CustomLink'


class Thanks extends React.Component {

  render = () =>
    <div className="Thanks">
      <div className="Thanks__text">
        <FormattedMessage id="Thanks.text" />
      </div>
      <Link
        to="/participate"
        className="Thanks__back"
      >
        <FormattedMessage id="Thanks.back" />
      </Link>
    </div>
}


export default Thanks
