import React, {FunctionComponent} from 'react';
import {TileLayer} from "@/app/components/TileLayer";
import {MapContainer} from "react-leaflet";
import {LatLngLiteral} from "leaflet";
import 'leaflet/dist/leaflet.css'
import styles from './TrailMapContainer.module.scss'

type MapContainerProps = {
    zoom: number;
    center: LatLngLiteral
    children: React.ReactNode
    setMap: (map: L.Map) => void
}

const TrailMapContainer: FunctionComponent<MapContainerProps> = ({zoom, center, setMap, children}) => {
    return (
        <MapContainer
            className={styles.mapContainer}
            zoom={zoom}
            center={[center.lat, center.lng]}
            ref={setMap}
        >
            <TileLayer />
            {children}
        </MapContainer>
    );
};

export default TrailMapContainer;