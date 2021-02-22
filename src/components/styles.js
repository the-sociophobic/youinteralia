const createMapStyle = props => [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
      {
        hue: props["landscape.geometry.hue"] || "#ff0000",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: props["landscape.man_made.geometry.color"] || "#944242",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        color: props["landscape.man_made.geometry.fill.color"] || "#ffffff",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: props["landscape.natural.geometry.color"] || "#ffffff",
      },
    ],
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
      {
        saturation: "-1",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.attraction",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: props["poi.park.geometry.color"] || "#292929",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: props["road.highway.geometry.fill.color"] || "#292929",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off",
      },
      {
        color: props["road.highway.geometry.stroke.color"] || "#494949",
      },
      {
        saturation: "-85",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: props["road.arterial.geometry.fill.color"] || "#888888",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: props["road.local.geometry.color"] || "#888888",
      },
      {
        visibility: props["road.local.geometry.visibility"] || "on",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      {
        color: props["road.local.geometry.fill.color"] || "#7f7f7f",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.station.airport",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.station.bus",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.station.rail",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: props["water.geometry.color"] || "#dddddd",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: props["water.geometry.fill.color"] || "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
]


const PetersbourgStyle_ = createMapStyle({
  // "landscape.geometry.hue": "#ff0000",
  "landscape.man_made.geometry.color": "#373b97",
  "landscape.man_made.geometry.fill.color": "#5c62b5",
  "landscape.natural.geometry.color": "#373b97",
  "poi.park.geometry.color": "#373b97",
  "road.highway.geometry.fill.color": "#ffffff",
  "road.highway.geometry.stroke.color": "#ffffff",
  "road.arterial.geometry.fill.color": "#ffffff",
  "road.local.geometry.color": "#ffffff",
  "road.local.geometry.fill.color": "#7f7f7f",
  "road.local.geometry.visibility": "off",
  "water.geometry.color": "#dddddd",
  "water.geometry.fill.color": "#eaeaea",
})

const GenevaStyle_ = createMapStyle({
  // "landscape.geometry.hue": "#ff0000",
  "landscape.man_made.geometry.color": "#007b66",
  "landscape.man_made.geometry.fill.color": "#007b66",
  "landscape.natural.geometry.color": "#008973",
  "poi.park.geometry.color": "#008973",
  "road.highway.geometry.fill.color": "#66b6a0",
  "road.highway.geometry.stroke.color": "#ffffff",
  "road.arterial.geometry.fill.color": "#ffffff",
  "road.local.geometry.color": "#66b6a0",
  "road.local.geometry.fill.color": "#66b6a0",
  "road.local.geometry.visibility": "on",
  "water.geometry.color": "#dddddd",
  "water.geometry.fill.color": "#eeeeee",
})





const PetersbourgStyle = [
  {
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#4056a1"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#6a7cbb"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#f1f0eb"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#babfdd"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#babfdd"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#babfdd"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#eeeeee"
          }
      ]
  }
]

const GenevaStyle = [
  {
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#d4d4d4"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#3e9583"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#48a393"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#7fc8b9"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#7fc8b9"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#7fc8b9"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#eeeeee"
          }
      ]
  }
]


export { PetersbourgStyle, GenevaStyle }
