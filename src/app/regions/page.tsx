'use client'

import useSWR from "swr";
import {fetchRegions, getRegionsEndpoint} from "@/app/api/fetchRegions";
import Regions from "@/app/regions/regions";
import {fetchTrails, getTrailsEndpoint} from "@/app/api/fetchTrails";
import Headline from "@/app/components/Headline/Headline";


export default function Home() {
  const { data: regions} = useSWR(getRegionsEndpoint(), (url) => fetchRegions(url))
  const { data: trails } = useSWR(getTrailsEndpoint, (url) => fetchTrails(url))

  return (
      <main>
          <title>Traildiary | Nach Region</title>
          <div>
              <Headline>Alle Regionen</Headline>
              {(regions === undefined || regions.length === 0 || trails === undefined)
                  ? 'Keine Regionen vorhanden' :
                  <Regions trails={trails} regions={regions}/>}


          </div>


      </main>
  )
}
