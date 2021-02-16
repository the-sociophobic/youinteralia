import React from 'react'

import Div100vh from 'react-div-100vh'

// import Map from 'components/Map'
// import Map from 'components/Map_react-google-maps'
import Map from 'components/Map_google-map-react'


function App() {
  return (
    <Div100vh>
      <div className="App">
        <Map />
      </div>
    </Div100vh>
  );
}

export default App;
