const PetersbourgStyle = [
  {
      "featureType": "all",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "weight": "1.00"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ff0000"
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
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.province",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#2c2c2c"
          },
          {
              "weight": "2.00"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#696969"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#f0e7cd"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#f9f3e2"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#eedeb6"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#474747"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "weight": "1.00"
          },
          {
              "color": "#474747"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#565656"
          },
          {
              "weight": "3.00"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "weight": "0.01"
          }
      ]
  },
  {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.fill",
      "stylers": [
          {"weight": "3.00"
        },
        {
            "color": "#474747"
        }
    ]
},
{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#474747"
        },
        {
            "weight": "2.00"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "visibility": "off"
        },
        {
            "weight": "0.50"
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#474747"
        },
        {
            "weight": "1.50"
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
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#404040"
        },
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "transit.station",
    "elementType": "geometry.fill",
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
            "color": "#cfd9d8"
        }
    ]
}
]

const GenevaStyle = PetersbourgStyle


export { PetersbourgStyle, GenevaStyle }
