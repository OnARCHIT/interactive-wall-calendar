"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx";
import gsap from "gsap";

import { holidays } from "@/data/holidays";
import { DateRange } from "@/types/calendar";

interface Props {

  month: Dayjs;

  range: DateRange;

  setRange: (range: DateRange) => void;

}

export default function CalendarGrid({

  month,
  range,
  setRange

}: Props) {

  const gridRef = useRef<HTMLDivElement | null>(null);

  const [hoverDate, setHoverDate] = useState<Dayjs | null>(null);


  /* --------------------------------
     CALENDAR MATRIX
  -------------------------------- */

  const days = useMemo(() => {

    const startOfMonth = month.startOf("month");

    const endOfMonth = month.endOf("month");

    const startWeekday = startOfMonth.day(); // 0-6

    const totalDays = endOfMonth.date();

    const prevPadding = Array(startWeekday).fill(null);

    const currentDays = [...Array(totalDays)].map((_, i) =>
      startOfMonth.add(i, "day")
    );

    return [...prevPadding, ...currentDays];

  }, [month]);


  /* --------------------------------
     RANGE LOGIC
  -------------------------------- */

  function handleSelect(day: Dayjs | null) {

    if (!day) return;

    if (!range.start) {

      setRange({
        start: day,
        end: null
      });

      return;

    }

    if (!range.end) {

      if (day.isBefore(range.start)) {

        setRange({
          start: day,
          end: range.start
        });

      } else {

        setRange({
          ...range,
          end: day
        });

      }

      return;

    }

    setRange({
      start: day,
      end: null
    });

  }


  function isInRange(day: Dayjs) {

    if (!range.start) return false;

    const end = range.end || hoverDate;

    if (!end) return false;

    return (

      day.isAfter(range.start.subtract(1, "day")) &&
      day.isBefore(end.add(1, "day"))

    );

  }


  function isToday(day: Dayjs) {

    return day.isSame(dayjs(), "day");

  }


  function getHoliday(day: Dayjs) {

    return holidays.find(
      h => h.date === day.format("YYYY-MM-DD")
    );

  }


  /* --------------------------------
     ANIMATION
  -------------------------------- */

  useEffect(() => {

    if (!gridRef.current) return;

    const ctx = gsap.context(() => {

      gsap.from(".dayCell", {

        opacity: 0,
        y: 12,
        stagger: 0.01,
        duration: 0.25,
        ease: "power2.out"

      });

    }, gridRef);

    return () => ctx.revert();

  }, [month]);


  /* --------------------------------
     RENDER
  -------------------------------- */

  return (

    <div className="calendarGridWrapper">

      {/* weekday header */}

      <div className="weekdayRow">

        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (

          <div
            key={d}
            className="weekdayCell"
          >
            {d}
          </div>

        ))}

      </div>


      {/* grid */}

      <div
        ref={gridRef}
        className="calendarGrid"
      >

        {days.map((day, i) => {

          if (!day) {

            return (

              <div
                key={i}
                className="emptyCell"
              />

            );

          }

          const holiday = getHoliday(day);

          const isStart = range.start?.isSame(day, "day");

          const isEnd = range.end?.isSame(day, "day");

          return (

            <div

              key={i}

              onClick={() => handleSelect(day)}

              onMouseEnter={() => setHoverDate(day)}

              onMouseLeave={() => setHoverDate(null)}

              className={clsx(

                "dayCell",

                isStart && "rangeStart",

                isEnd && "rangeEnd",

                isInRange(day) && "rangeMiddle",

                isToday(day) && "today",

                holiday && "holidayCell"

              )}

            >

              <span className="dateNumber">

                {day.date()}

              </span>


              {holiday && (

                <span
                  className="holidayDot"
                  style={{
                    background: holiday.color
                  }}
                />

              )}

            </div>

          );

        })}

      </div>

    </div>

  );

}
