import {defaultCustomIcon, currentCustomIcon} from '../../const';
import type {LocationMap, BookingInfo} from '../../types/types';
import React, {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import {Marker} from 'leaflet';

type MapProps = {
  locationMap: LocationMap;
  points?: BookingInfo[];
  activePoint?: BookingInfo | null;
  onMarkerClick?: (bookingInfo: BookingInfo) => void;
  isShowOffice?: boolean;
};

const Map = (props: MapProps): JSX.Element => {
  const {locationMap, points, activePoint, isShowOffice, onMarkerClick} = props;
  const mapRef = useRef(null);
  const map = useMap({mapRef, locationMap});

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      if (isShowOffice) {
        const marker = new Marker({
          lat: locationMap.lat,
          lng: locationMap.lng,
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      }

      points?.forEach((point) => {
        const marker = new Marker({
          lat: point.location.coords[0],
          lng: point.location.coords[1]
        });

        marker
          .setIcon(activePoint?.id === point.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);

        if (onMarkerClick) {
          marker
            .on('click', () => onMarkerClick(point));
        }

        markers.push(marker);
      });
    }

    return () => {
      if (map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };
  }, [map, points, activePoint, isShowOffice, onMarkerClick, locationMap]);

  return <div className="map__container" ref={mapRef}></div>;
};

export default Map;
