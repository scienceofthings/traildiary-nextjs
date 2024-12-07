'use client'
import useSWR from "swr";
import {fetchTrailDetails, getTrailDetailEndpoint} from "@/app/api/fetchTrail";
import React from "react";
import dynamic from "next/dynamic";

type DetailViewOrchestrationProps = {
    trailId: number
}

const DetailViewWithNoSSR = dynamic(
    () => import('./DetailView/DetailView'),
    { ssr: false }
)

const DetailViewOrchestration: React.FunctionComponent<DetailViewOrchestrationProps> = ({trailId}) => {
    const { data, error } = useSWR(getTrailDetailEndpoint(trailId), (url) => fetchTrailDetails(url))
    if (error !== undefined || data === undefined) {
        return <>Fehler beim Laden</>
    }

    return (
        <>
            <title>{data.title}</title>
            <DetailViewWithNoSSR trailDetails={data}/>
        </>
    )
}
export default DetailViewOrchestration