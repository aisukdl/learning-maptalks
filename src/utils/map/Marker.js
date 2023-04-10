import * as maptalks from 'maptalks';
import mapConfig from '../mapConfig.json'

export const marker1 = new maptalks.Marker(
    mapConfig.features[0].geometry.coordinates,
    {
      'symbol' : {
      'textFaceName' : 'sans-serif',
      'textName' : mapConfig.features[0].properties.name.en,
      'textFill' : '#34495e',
      'textHorizontalAlignment' : 'right',
      'textSize' : 20}
    }
  );

const features = mapConfig.features

export const markers = features.map(feature => new maptalks.Marker(
    feature.geometry.coordinates,
    {
      'symbol' : {
      'textFaceName' : 'sans-serif',
      'textName' : feature.properties.name.en,
      'textFill' : '#34495e',
      'textHorizontalAlignment' : 'right',
      'textSize' : 20}
    }
))