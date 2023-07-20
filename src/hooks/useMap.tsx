import { useEffect, useState, useRef, MutableRefObject } from 'react';
import type { LocationMap } from '../types/types';
import { Map, TileLayer } from 'leaflet';

type UseMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>;
  locationMap: LocationMap;
}

const useMap = ({mapRef, locationMap}: UseMapProps): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: locationMap.lat,
          lng: locationMap.lng,
        },
        zoom: locationMap.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>', }
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, map, locationMap]);

  return map;
};

export default useMap;
