import * as maptalks from 'maptalks';

export function createMap(mapLayers,mapRef) {
    const map = new maptalks.Map(mapRef.current, {
      center: [100.5169143, 13.71788],
      zoom: 14,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ["a", "b", "c", "d"]
      }),
      layers: mapLayers
    });
  
    return map;
}
