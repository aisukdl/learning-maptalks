import { useEffect } from 'react';
import { createMap } from '../utils/map/mapCanvas'
import { mapLayers } from '../utils/map/mapLayer';
function Map() {
  useEffect(() => {
    const map = createMap(mapLayers);
    return () => {
      map.remove(); // Remove the map instance on component unmount
    };
  }, []);
  return (
      <div id="map" className="container" style={{height:'100vh' ,width:"100vw"}}/>
  );
};

export default Map;