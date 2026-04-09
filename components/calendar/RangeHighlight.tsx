"use client";

import { ReactNode } from "react";

interface Props {

  active:boolean;

  children:ReactNode;

}

export default function RangeHighlight({

  active,

  children

}: Props) {

  return (

    <div

      className={`rangeWrap ${active ? "rangeActive" : ""}`}

    >

      {children}

    </div>

  );

}