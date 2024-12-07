'use client'
import React, {useState} from 'react'
import {Polyline} from 'react-leaflet'
import {TrailDetail} from "@/app/api/fetchTrail";

import 'leaflet/dist/leaflet.css'

import {TrailMapContainer} from "@/app/components/TrailMapContainer";
import L from "leaflet";

type DetailMapProps = {
  trail: TrailDetail
}

const DetailMap: React.FunctionComponent<DetailMapProps> = ({ trail }) => {
  const polyLineOptions = { color: 'red' }
  const [, setMap] = useState<L.Map | null>(null)

  return (
      <TrailMapContainer zoom={13} center={{lat: trail.start_position[0], lng: trail.start_position[1]}} setMap={setMap}>
          <Polyline pathOptions={polyLineOptions} positions={trail.gpx_points} />
      </TrailMapContainer>
  )
}

export default DetailMap
