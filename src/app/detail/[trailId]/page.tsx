import React from "react";
import DetailViewOrchestration from "@/app/detail/[trailId]/DetailViewOrchestration";


export default async function DetailPage({ params }: { params: Promise<{ trailId: number }> }) {
    const { trailId } = await params
    return (
        <DetailViewOrchestration trailId={trailId}/>
    )
}
