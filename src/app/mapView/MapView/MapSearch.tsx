import React, {useState} from 'react'
import OverviewMap from './OverviewMap'
import VisibleTrails from './VisibleTrails'
import {Trail} from "@/app/api/fetchTrails";

type MapSearchProps = {
  trails?: Trail[]
}

const MapSearch: React.FunctionComponent<MapSearchProps> = ({
    trails
}) => {
  const [visibleTrails, setVisibleTrails] = useState<Trail[]>([])


  return (
    <>
      {trails ? (
        <>
          <OverviewMap trails={trails} setVisibleTrails={setVisibleTrails} />
          {<VisibleTrails trails={visibleTrails} />}
        </>
      ) : (
        <b>Keine Trails vorhanden</b>
      )}
    </>
  )
}

export default MapSearch
