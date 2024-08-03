import {config} from "./config";
import {Fetcher} from "swr";
import {getTrailsEndpoint, Trail} from "@/app/api/fetchTrails";
import {Region} from "@/app/api/fetchRegions";
import {LatLngLiteral} from "leaflet";

export type ResponsiveImageSources = [string, string, string]

export const getTrailEndpoint = (trailId: number): string => (
    `${getTrailsEndpoint()}${trailId}/`
)



export type TrailDetail = Trail & {
    description: string
    technique: string
    todo: string
    gpx_file_name: string
    gpx_points: LatLngLiteral[]
    images: ResponsiveImageSources[]
}

export const fetchTrails: Fetcher<Trail, string> = async(url: string) => {
    const response = await fetch(url, {
            headers: { accept: 'application/json' },
            method: 'GET'
        })
    if (response.ok) {
        return await response.json()
    } else {
        throw new Error('Das Laden war nicht erfolgreich.' )
    }

}