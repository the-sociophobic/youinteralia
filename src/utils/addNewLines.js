import React from 'react'


const addNewLines = string =>
  typeof string === "string" ?
    string
      .split('\n')
      .reduce((a, b) =>
        <React.Fragment>
          {a}<br />{b}
        </React.Fragment>)
    :
    string


export default addNewLines