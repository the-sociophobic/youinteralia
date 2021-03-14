import React from 'react'

import _ from 'lodash'

import { StoreContext } from 'components/Store'
import Link from 'components/CustomLink'


class Admin extends React.Component {

  static contextType = StoreContext

  checkIfLogged = () => {
    if (this.checkInterval) {
      if (!_.isEmpty(this.context.user))
        clearInterval(this.checkInterval)
      return
    }

    let tries = 0

    this.checkInterval = setInterval(() => {
      if (!_.isEmpty(this.context.user) || tries > 10) {
        clearInterval(this.checkInterval)
        console.log(this.context.user)
      }
      this.context.checkUser()
      tries++
    }, 500)
  }

  render = () =>
    <div className="Admin">
      {!this.context.user ?
        <div className="Admin__login">
          <Link
            className="Admin__login__button"
            to={`https://t.me/I_V_L_bot?start=${this.context.sessionToken}`}
            disabled={!this.context.sessionToken}
            onClick={() => this.checkIfLogged()}
          >
            Войти
          </Link>
        </div>
        :
        <div className="Admin__console">
          <h2 className="h2">Вы вошли как {this.context.user.name} {this.context.user.surname}</h2>
          
        </div>
      }
    </div>
}


export default Admin
