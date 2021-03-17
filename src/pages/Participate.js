import React from 'react'

import { withRouter } from 'react-router-dom'

import Input from 'components/Input'
import {
  FormattedMessage,
  StoreContext,
  getMessage,
} from 'components/Store'
import Link from 'components/CustomLink'
import CitySelector from 'components/CitySelector'
import FileUpload from 'components/FileUpload'
import { post } from 'utils/API'


const inputs = [
  "Participate.form.name",
  "Participate.form.email",
  "Participate.form.location",
  "Participate.form.link",
]

class Participate extends React.Component {
  state = {
    ...inputs
      .map(input => ({
        [input]: ""
      }))
      .reduce((a, b) => ({ ...a, ...b })),
    city: undefined,
    fileUploading: false,
    file: undefined,
  }

  static contextType = StoreContext

  renderAgreeLine = () => {
    const line = getMessage(this, "Participate.form.agree")
    const linkText = this.context.locale === "rus" ? "политикой конфиденциальности" : "privacy policy"
    const parts = line.split(linkText)

    return (
      <div className="Particapate__form__agree">
        {parts[0]}
        <Link to="/privacy">
          {linkText}
        </Link>
        {parts[1]}
      </div>
    )
  }

  buttonEnabled = () =>
    inputs
      .map(input =>
        this.state[input].length > 0)
      .reduce((a, b) => a && b)
    && this.state.city
    && ((this.state.file && !this.state.fileUploading) || this.state["Participate.form.link"])

  submit = async () => {
    const res = await post('/participate', {
      application: {
        name: this.state["Participate.form.name"],
        city: this.state.city,
        email: this.state["Participate.form.email"],
        route: this.state["Participate.form.location"],
        audioURL: this.state["Participate.form.link"],
      }
    })

    console.log(res)

    this.props.history.push('/thanks')
  }
    

  render = () => {
    const mappedInputs = inputs.map(input =>
      <Input
        key={input}
        value={this.state[input]}
        onChange={value_ => this.setState({ [input]: value_ })}
        placeholder={getMessage(this, input)}
      />)

    return (
      <div className="Participate">
        <div className="Participate__desc">
          <FormattedMessage id="Participate.desc" />
        </div>
        <div className="Participate__form">

          {mappedInputs.slice(0, 2)}

          <CitySelector
            city={this.state.city}
            setCity={city => this.setState({ city: city })}
          />
          {mappedInputs[2]}

          {/* <FileUpload
            setFile={link => this.setState({ file: link})}
            setUploadilng={uploading => this.setState({ fileUploading: uploading})}
          /> */}
          {mappedInputs[3]}

          <button
            className="Participate__form__submit"
            disabled={!this.buttonEnabled()}
            onClick={() => this.submit()}
          >
            <FormattedMessage id="Participate.form.submit" />
          </button>
          
          {this.renderAgreeLine()}

        </div>
      </div>
    )
  }
}


export default withRouter(Participate)
