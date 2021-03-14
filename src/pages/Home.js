import React from 'react'

import { withRouter } from 'react-router-dom'

import { StoreContext } from 'components/Store'
import BigMenu from 'components/BigMenu'
import Menu from 'components/Menu'
import Map from 'components/Map'


class Home extends React.Component {

  static contextType = StoreContext

  render = () =>
    this.context.canView || this.props.location.path.includes("admin") ?
      <div className="App">
        <Map ref={this.mapRef} />
        <BigMenu mapRef={this.mapRef} />
        <Menu mapRef={this.mapRef} />
      </div>
      :
      ""
}


export default withRouter(Home)