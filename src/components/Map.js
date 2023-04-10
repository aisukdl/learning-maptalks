import { useEffect, useRef } from 'react';
import { createMap } from '../utils/map/mapCanvas'
import { mapLayers } from '../utils/map/mapLayer';
function Map() {
  const mapRef = useRef(null);
  useEffect(() => {
    const map = createMap(mapLayers,mapRef);
    return () => {
      map.remove(); // Remove the map instance on component unmount
    };
  }, []);
  return (
      <div ref={mapRef} style={{height:'100vh' ,width:"100vw"}}/>
  );
};

export default Map;