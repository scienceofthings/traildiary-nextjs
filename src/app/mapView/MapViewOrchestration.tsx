'use client'
import useSWR from "swr";
import {fetchTrails, getTrailsEndpoint} from "@/app/api/fetchTrails";
import {Col, Row} from "react-bootstrap";
import React from "react";
import dynamic from "next/dynamic";

const MapSearchWithNoSSR = dynamic(
    () => import('./MapView/MapSearch'),
    { ssr: false }
)


const MapViewOrchestration = () => {
    const { data: trails, error } = useSWR(getTrailsEndpoint(), (url) => fetchTrails(url))

    if (error !== undefined){
        return (<>Ein Fehler beim Laden der Trails trat auf</>)
    }

    return (
        <Row>
            <Col>
                <title>Traildiary: Nach Karte</title>
                <MapSearchWithNoSSR trails={trails}/>
            </Col>
        </Row>
    );

}
export default MapViewOrchestration