"use client";

import { Dayjs } from "dayjs";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {

  month: Dayjs;

  setMonth: (month: Dayjs) => void;

}

export default function MonthHeader({

  month,
  setMonth

}: Props) {

  const headerRef = useRef<HTMLDivElement | null>(null);


  /* -----------------------------
     animation
  ----------------------------- */

  useEffect(() => {

    if (!headerRef.current) return;

    const ctx = gsap.context(() => {

      gsap.from(".monthTitle", {

        y: 10,
        opacity: 0,
        duration: .35,
        ease: "power2.out"

      });

    }, headerRef);

    return () => ctx.revert();

  }, [month]);


  /* -----------------------------
     navigation handlers
  ----------------------------- */

  function prevMonth() {

    setMonth(month.subtract(1, "month"));

  }

  function nextMonth() {

    setMonth(month.add(1, "month"));

  }

  function goToday() {

    setMonth(month.startOf("month").add(
      new Date().getMonth() - month.month(),
      "month"
    ));

  }


  /* -----------------------------
     render
  ----------------------------- */

  return (

    <div
      ref={headerRef}
      className="monthHeader"
    >

      <div className="navGroup">

        <button
          aria-label="Previous month"
          onClick={prevMonth}
          className="navButton"
        >
          ←
        </button>

        <button
          aria-label="Next month"
          onClick={nextMonth}
          className="navButton"
        >
          →
        </button>

      </div>


      <div className="monthTitle">

        {month.format("MMMM YYYY")}

      </div>


      <button
        onClick={goToday}
        className="todayButton"
      >
        Today
      </button>


    </div>

  );

}