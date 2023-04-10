import * as maptalks from 'maptalks';
import { mapRoute } from './mapRoute'
import { markers } from './Marker';


const layers = [mapRoute,...markers]
export const mapLayers = [new maptalks.VectorLayer('v', layers)]