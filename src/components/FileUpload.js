import React from 'react'

import { post } from 'utils/API'


class FileUpload extends React.Component {

  onChange = async e => {
    this.props?.setUploading?.(true)
    
    const formData = new FormData()

    formData.append('file', e.target.files[0])

    const res = await post(
      '/file',
      formData,
      { headers: { 'content-type': 'multipart/form-data' }
    })

    console.log(res)
    this.props.setFile(res)
    this.props?.setUploading?.(false)
  }

  render = () =>
    <input
      type="file"
      onChange={e => this.onChange(e)}
      className="Input__file"
    />
}



export default FileUpload