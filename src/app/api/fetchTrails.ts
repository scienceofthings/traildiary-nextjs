import {config} from "./config";
import {Fetcher} from "swr";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {Region} from "@/app/api/fetchRegions";

export type Trail = {
    id: number
    title: string
    region: Region["id"]
    start_position: [number, number]
}

export const getTrailsEndpoint = (): string => (`${config.apiUrlPrefix}/trails/`)

export const fetchTrails: Fetcher<Trail[], string> = async(url: string) => {
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