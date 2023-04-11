import * as maptalks from 'maptalks';
import { mapRoute } from './mapRoute'
import { textMarkers,restroomMarkers } from './marker';


const mapGeometries = [mapRoute,...textMarkers,...restroomMarkers]
export const mapLayers = [new maptalks.VectorLayer('v', mapGeometries)]