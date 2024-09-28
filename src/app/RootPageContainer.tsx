'use client'
import React from 'react';
import useSWR from "swr";
import {fetchTrails, getTrailsEndpoint} from "@/app/api/fetchTrails";
import {Col, Row} from "react-bootstrap";
import MapSearch from "@/app/mapView";

const RootPageContainer = () => {
    const { data: trails, error } = useSWR(getTrailsEndpoint(), (url) => fetchTrails(url))

    if (error !== undefined){
        return (<>Ein Fehler beim Laden der Trails trat auf</>)
    }

    return (
        <Row>
            <Col>
                <title>Traildiary: Nach Karte</title>
                <MapSearch trails={trails}/>
            </Col>
        </Row>
    );
};

export default RootPageContainer;