'use client'
import React, {useCallback, useEffect, useState} from 'react'
import { Marker, Popup } from 'react-leaflet'
import L, {LatLngLiteral} from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import Link from "next/link";
import 'leaflet/dist/leaflet.css'
import {Trail} from "@/app/api/fetchTrails";
import {TrailMapContainer} from "@/app/components/TrailMapContainer";
import { create } from 'zustand'
import {persist} from 'zustand/middleware'

// https://github.com/PaulLeCam/react-leaflet/issues/453
const DefaultIcon = L.icon({
    iconUrl: icon.src,
    shadowUrl: iconShadow.src,
})
L.Marker.prototype.options.icon = DefaultIcon

type Props = {
  trails: Trail[]
  setVisibleTrails: (trails: Trail[]) => void
}

type MapState = {
    zoomLevel: number,
    setZoomLevel: (zoomLevel: number) => void
    center: LatLngLiteral
    setCenter: (center: LatLngLiteral) => void
}

const useMapStateStore = create<MapState>()(
    persist(
        (set) => ({
            zoomLevel: 13,
            setZoomLevel: (zoomLevel: number) => set({ zoomLevel: zoomLevel }),
            center: {
                lat: 47.9959,
                lng: 7.85222
            },
            setCenter: (center: LatLngLiteral) => set({ center: center }),
        }),
        {
            name: 'overviewMapState'
        }
    )
)

const OverviewMap: React.FunctionComponent<Props> = ({ trails, setVisibleTrails }) => {
    const zoomLevel = useMapStateStore((state) => state.zoomLevel)
    const setZoomLevel = useMapStateStore((state) => state.setZoomLevel)
    const center = useMapStateStore((state) => state.center)
    const setCenter = useMapStateStore((state) => state.setCenter)

    const [map, setMap] = useState<L.Map | null>(null)

    const onMoveEnd = useCallback(() => {
        if (map === null) return
        const visibleTrails = trails.filter((trail: Trail) => {
            return map.getBounds().contains(trail.start_position)
        })
        setVisibleTrails(visibleTrails)
        setZoomLevel(map.getZoom())
        setCenter(map.getCenter())
    }, [map, trails, setVisibleTrails, setZoomLevel, setCenter])

    useEffect(() => {
        if (map === null) return
        onMoveEnd()
        map.on('move', onMoveEnd)
        return () => {
            map.off('move', onMoveEnd)
        }
    }, [map, onMoveEnd])

    return (<TrailMapContainer
        zoom={zoomLevel}
        center={center}
        setMap={setMap}
    >
        {trails && trails.length
            ? trails.map((trail) => (
                <Marker position={trail.start_position} key={trail.id}>
                    <Popup><Link href={`/detail/${trail.id}`}>{trail.title}</Link></Popup>
                </Marker>
            ))
            : ''}
    </TrailMapContainer>
    )
}

export default OverviewMap
