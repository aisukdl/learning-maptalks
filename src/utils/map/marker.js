import * as maptalks from 'maptalks';
import mapData from '../mapData.json'
import restroomIcon from '../icons/restroom.png'



const features = mapData.features

export const restroomMarkers = features.filter(feature => feature.properties.category ==='restroom').map(feature => new maptalks.Marker(
    feature.geometry.coordinates,
    {
      'symbol' : {
        'markerFile'   : restroomIcon,
        'markerWidth'  : 40,
        'markerHeight' : 40,
        'markerDx'     : 0,
        'markerDy'     : 0,
        'markerOpacity': 1
      }
    }
))

export const textMarkers = features.filter(feature => feature.properties.category !=='restroom').map(feature => new maptalks.Marker(
  feature.geometry.coordinates,
  {
    'properties': {
      'altitude': 200
    },
    'symbol' : {
      'textFaceName' : 'sans-serif',
      'textName' : feature.properties.name.en,
      'textFill' : '#34495e',
      'textHorizontalAlignment' : 'center',
      'textSize' : 20
      }
  }
))