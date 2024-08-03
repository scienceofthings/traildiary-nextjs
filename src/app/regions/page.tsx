'use client'

import Link from "next/link";
import useSWR from "swr";
import {fetchRegions, getRegionsEndpoint} from "@/app/api/fetchRegions";


export default function Home() {
  const { data, isLoading, error } = useSWR(getRegionsEndpoint(), (url) => fetchRegions(url))
    // {data !== undefined && data.map((region) => region.title)}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Regions</h1>
          {data === undefined && 'Keine Regionen vorhanden'}

          {data !== undefined && JSON.stringify(data)}
          <Link href="/">Mapsearch</Link><br/>
          <Link href="/login">Login</Link>
      </div>




    </main>
  )
}
