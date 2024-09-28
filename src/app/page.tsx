import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import dynamic from "next/dynamic";

const RootPageContainer = dynamic(() => import('./RootPageContainer'), {
  ssr: false,
});

export default function Home() {
  return (
      <RootPageContainer/>
  );
}
