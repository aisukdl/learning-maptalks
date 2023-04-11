import * as maptalks from 'maptalks';
import { mapRoute } from './mapRoute'
import { textMarkers,restroomMarkers } from './marker';


const layerGeometries = [mapRoute,...textMarkers,...restroomMarkers]
const layerOptions = {
    enableAltitude : true,
    // draw altitude
    drawAltitude : {
      lineWidth : 1,
      lineColor : '#000'
    }
}

export const mapLayers = [new maptalks.VectorLayer('v', layerGeometries, layerOptions)]