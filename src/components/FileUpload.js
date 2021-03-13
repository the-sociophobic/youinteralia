import React from 'react'
import axios, { post } from 'axios'


class FileUpload extends React.Component {

  state = {
    file: null
  }

  onChange = e =>
    this.setState({
      file: e.target.files[0] })

  fileUpload = file => {
    const url = 'http://example.com/file-upload'
    const formData = new FormData()

    formData.append('file', file)

    return post(url, formData, { headers: { 'content-type': 'multipart/form-data' } })
  }

  render = () =>
    <input type="file" onChange={this.onChange} />
}



export default FileUpload