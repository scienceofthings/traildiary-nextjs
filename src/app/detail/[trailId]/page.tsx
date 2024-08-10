'use client'
import React from "react";
import useSWR from "swr";
import {fetchTrailDetails, getTrailDetailEndpoint} from "@/app/api/fetchTrail";
import {DetailView} from "@/app/detail/[trailId]/DetailView";


export default function DetailPage({ params }: { params: { trailId: number } }) {
    const { data, error } = useSWR(getTrailDetailEndpoint(params.trailId), (url) => fetchTrailDetails(url))
    if (error !== undefined || data === undefined) {
        return <>Fehler beim Laden</>
    }

    return (
        <>
        <title>{data.title}</title>
        <DetailView trailDetails={data}/>
        </>
    )

}
