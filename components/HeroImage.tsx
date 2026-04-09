"use client";

import { useEffect, useRef } from "react";
import { Dayjs } from "dayjs";
import gsap from "gsap";

interface Props {

  month: Dayjs;

}

export default function HeroImage({ month }: Props) {

  const ref = useRef<HTMLDivElement | null>(null);

  /* example mapping month → image */

  const imageMap: Record<number,string> = {

    0: "/images/jan.jpg",
    1: "/images/feb.jpg",
    2: "/images/mar.jpg",
    3: "/images/apr.jpg",
    4: "/images/may.jpg",
    5: "/images/jun.jpg",
    6: "/images/jul.jpg",
    7: "/images/aug.jpg",
    8: "/images/sep.jpg",
    9: "/images/oct.jpg",
    10: "/images/nov.jpg",
    11: "/images/dec.jpg"

  };

  const src = imageMap[month.month()] || "/images/calendarHero.jpg";


  useEffect(() => {

    if (!ref.current) return;

    gsap.from(ref.current, {

      opacity: 0,
      scale: 1.02,
      duration: 0.6,
      ease: "power2.out"

    });

  }, [month]);


  return (

    <div
      ref={ref}
      className="heroContainer"
    >

      <img
        src={src}
        alt="calendar visual"
        className="heroImage"
      />

      <div className="heroGradient"/>

      <div className="heroLabel">

        {month.format("MMMM")}

      </div>

    </div>

  );

}