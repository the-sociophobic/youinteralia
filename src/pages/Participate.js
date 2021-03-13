import React from 'react'

import Input from 'components/Input'
import {
  FormattedMessage,
  StoreContext,
  getMessage,
} from 'components/Store'
import Link from 'components/CustomLink'
import CitySelector from 'components/CitySelector'
import FileUpload from 'components/FileUpload'


const inputs = [
  "Participate.form.name",
  "Participate.form.email",
  "Participate.form.location",
]

class Participate extends React.Component {
  state = {
    ...inputs
      .map(input => ({
        [input]: ""
      }))
      .reduce((a, b) => ({ ...a, ...b })),
    city: undefined,
    fileLink: undefined,
    fileUploading: false,
  }

  static contextType = StoreContext

  renderAgreeLine = () => {
    const line = getMessage(this, "Participate.form.agree")
    const linkText = this.context.locale === "rus" ? "политикой конфиденциальности" : "privacy policy"
    const parts = line.split(linkText)

    return (
      <div className="Particapate__form__agree">
        {parts[0]}<Link to="/privacy">{linkText}</Link>{parts[1]}
      </div>
    )
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
          <FileUpload
            setFileLink={link => this.setState({ fileLink: link})}
            setUploadilng={uploading => this.setState({ fileUploading: uploading})}
          />

          <button className="Participate__form__submit">
            <FormattedMessage id="Participate.form.submit" />
          </button>
          
          {this.renderAgreeLine()}

        </div>
      </div>
    )
  }
}


export default Participate
