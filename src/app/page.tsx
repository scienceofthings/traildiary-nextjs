import Link from "next/link";
import {useState} from "react";
import {LatLngLiteral} from "leaflet";

export type LatLngAndZoomLevel = LatLngLiteral & { zoomLevel: number}

export default function Home() {
    const [mapState, setMapState] = useState<LatLngAndZoomLevel>({
        lat: 47.9959,
        lng: 7.85222,
        zoomLevel: 13
    })
  return (
    <main>
        <h1>MapSearch Home</h1>
          <Link href="/regions">Regions</Link>
    </main>
  );
}
