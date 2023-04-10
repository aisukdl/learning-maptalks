import * as maptalks from 'maptalks';
import { useEffect } from 'react';
import mapConfig from '../utils/mapConfig.json'

function Map() {
  useEffect(() => {
    const map = new maptalks.Map('map', {
      center: [100.5169143,13.71788],
      zoom: 14,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ["a","b","c","d"],
        attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      })
    });
    const routeJSON = mapConfig.route
    // Split the string by comma and space to separate the coordinates, and convert each coordinate pair into an array of numbers
    const route = routeJSON.split(', ').map(coord => coord.split(' ').map(Number));
    var line = new maptalks.LineString(route, {
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
    });
    new maptalks.VectorLayer('vector', line).addTo(map);

    return () => {
      map.remove(); // Remove the map instance on component unmount
    };
  }, []);
  return (
      <div id="map" className="container" style={{height:'100vh' ,width:"100vw"}}/>
  );
};

export default Map;