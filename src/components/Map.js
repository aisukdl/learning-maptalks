import * as maptalks from 'maptalks';
import { useEffect } from 'react';
import mapConfig from '../utils/mapConfig.json'
import { createMap } from '../utils/map/mapCanvas';
import { mapRoute } from '../utils/map/mapRoute';

function Map() {
  useEffect(() => {
    const map = createMap();
    return () => {
      // const vectorLayer = map.getLayer('vector'); // Get the vector layer
      // vectorLayer && vectorLayer.removeGeometry([mapRoute]); //remove vector if already existed
      map.remove(); // Remove the map instance on component unmount
    };
  }, []);
  return (
      <div id="map" className="container" style={{height:'100vh' ,width:"100vw"}}/>
  );
};

export default Map;