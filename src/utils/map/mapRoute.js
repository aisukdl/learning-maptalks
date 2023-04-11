import * as maptalks from 'maptalks';
import mapData from '../mapData.json'


const route = mapData.route.split(', ').map(coord => coord.split(' ').map(Number));
export const mapRoute = new maptalks.LineString(route, {
      arrowStyle : null, // arrow-style : now we only have classic
      arrowPlacement : 'vertex-last', // arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
      visible : true,
      editable : true,
      cursor : null,
      draggable : false,
      dragShadow : false, // display a shadow during dragging
      drawOnAxis : null,  // force dragging stick on a axis, can be: x, y
      symbol: {
        'lineColor' : '#1bbc9b',
        'lineWidth' : 8
      }
  })