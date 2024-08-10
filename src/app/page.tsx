'use client'
import MapSearch from "@/app/mapView/MapSearch";
import useSWR from "swr";
import {fetchTrails, getTrailsEndpoint} from "@/app/api/fetchTrails";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Col, Row} from "react-bootstrap";

export default function Home() {
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
}
