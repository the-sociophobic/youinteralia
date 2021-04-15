import React from 'react'

import _ from 'lodash'

import { StoreContext } from 'components/Store'
import Link from 'components/CustomLink'
import { post } from 'utils/API'


class Admin extends React.Component {

  state = {
    data: []
  }

  static contextType = StoreContext

  componentDidMount = () => {
    if (!_.isEmpty(this.context.user))
      this.loadData()
  }

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
        this.loadData()
        console.log(this.context.user)
      }
      this.context.checkUser()
      tries++
    }, 500)
  }

  loadData = async () => {
    this.setState({ data: await post('/') })
    console.log(this.state)
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
          <h3 className='h3'>Заявки:</h3>
          <div className='d-flex flex-column'>
            <div className='row'>
              <div className='col'>
                city
              </div>
              <div className='col'>
                email
              </div>
              <div className='col'>
                name
              </div>
              <div className='col'>
                route
              </div>
              <div className='col'>
                audioURL
              </div>
            </div>
            {this.state.data?.map(application =>
              <div className='row'>
                <div className='col'>
                  {application.city}
                </div>
                <div className='col'>
                  {application.email}
                </div>
                <div className='col'>
                  {application.name}
                </div>
                <div className='col'>
                  {application.route}
                </div>
                <div className='col'>
                  {application.audioURL}
                </div>
              </div>
            )}
          </div>
        </div>
      }
    </div>
}


export default Admin
