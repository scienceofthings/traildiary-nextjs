import React from 'react'
import {Trail} from "@/app/api/fetchTrails";
import Link from "next/link";


type VisibleTrailsProps = {
  trails: Trail[]
}


const VisibleTrails: React.FunctionComponent<VisibleTrailsProps> = ({
  trails
}) => {
  const listItems = trails.map((trail) => {
    return (
      <li key={trail.id}>
        <Link href={`/detail/${trail.id}`}>{trail.title}</Link>
      </li>
    )
  })
  return (
    <>
      {trails.length > 0 ? (
        <ul>{listItems}</ul>
      ) : (
        <>Keine Trails vorhanden</>
      )}
    </>
  )
}

export default VisibleTrails
