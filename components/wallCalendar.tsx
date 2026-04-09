"use client";

import { useEffect, useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import gsap from "gsap";

import CalendarGrid from "./CalendarGrid";
import MonthHeader from "./MonthHeader";
import NotesPanel from "./NotesPanel";
import HeroImage from "./HeroImage";

import { DateRange } from "@/types/calendar";

const STORAGE_KEY = "wall-calendar-notes";

export default function WallCalendar() {

  /* ------------------------------
     STATE
  ------------------------------ */

  const [month, setMonth] = useState<Dayjs>(dayjs());

  const [range, setRange] = useState<DateRange>({
    start: null,
    end: null
  });

  const [notes, setNotes] = useState<string>("");

  const containerRef = useRef<HTMLDivElement | null>(null);


  /* ------------------------------
     LOAD SAVED NOTES
  ------------------------------ */

  useEffect(() => {

    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setNotes(saved);
    }

  }, []);


  /* ------------------------------
     SAVE NOTES
  ------------------------------ */

  useEffect(() => {

    localStorage.setItem(STORAGE_KEY, notes);

  }, [notes]);


  /* ------------------------------
     ENTRY ANIMATION
  ------------------------------ */

  useEffect(() => {

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {

      gsap.from(".heroSection", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.from(".calendarSection", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out"
      });

      gsap.from(".notesSection", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out"
      });

    }, containerRef);

    return () => ctx.revert();

  }, []);


  /* ------------------------------
     RESET RANGE WHEN MONTH CHANGES
  ------------------------------ */

  useEffect(() => {

    setRange({
      start: null,
      end: null
    });

  }, [month]);


  /* ------------------------------
     RENDER
  ------------------------------ */

  return (

    <div
      ref={containerRef}
      className="wallCalendarWrapper"
    >

      {/* HERO IMAGE */}

      <section className="heroSection">

        <HeroImage
          month={month}
        />

      </section>


      {/* MAIN CONTENT */}

      <section className="calendarSection">

        <MonthHeader
          month={month}
          setMonth={setMonth}
        />

        <CalendarGrid
          month={month}
          range={range}
          setRange={setRange}
        />

      </section>


      {/* NOTES */}

      <section className="notesSection">

        <NotesPanel
          range={range}
          notes={notes}
          setNotes={setNotes}
        />

      </section>


    </div>

  );

}
