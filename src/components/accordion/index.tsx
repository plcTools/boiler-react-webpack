import React, { ReactElement } from "react";
import "./style.css";

export default function Accordion({ children }:{children:React.ReactNode}) {
  return (
    <>
      <h1>Titulo de prueba</h1>
      <h2 className=" text-5xl text-amber-600">Prueba tailwinds</h2>
      <div>{children}</div>
    </>
  );
}
