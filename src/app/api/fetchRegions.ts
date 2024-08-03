import {config} from "./config";
import {Fetcher} from "swr";

export type Region = {
    id: number
    title: string
}

export const getRegionsEndpoint = (): string => `${config.apiUrlPrefix}/regions/`

export const fetchRegions: Fetcher<Region[], string> = async(url: string) => {
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