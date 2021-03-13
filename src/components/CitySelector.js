import React from 'react'

import { FormattedMessage } from 'components/Store'


const CitySelector = props =>
  <div className="city-selector">
    <div className="city-selector__name">
      <FormattedMessage id={
        typeof props.city === "undefined" ?
          "Participate.form.city"
          :
          props.city === "spb" ?
            "Participate.form.citySaintPetersbourg"
            :
            "Participate.form.cityGeneva"
      } />
    </div>
    <div
      className={`city-selector__spb ${props.city === "spb" && "city-selector__spb--selected"}`}
      onClick={() => props?.setCity?.("spb")}
    >
      spb
    </div>
    <div
      className={`city-selector__gen ${props.city === "gen" && "city-selector__gen--selected"}`}
      onClick={() => props?.setCity?.("gen")}
    >
      gen
    </div>
  </div>


export default CitySelector