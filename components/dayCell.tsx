"use client";

import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx";
import { Holiday } from "@/types/calendar";

interface Props {

  day: Dayjs;

  isStart: boolean;

  isEnd: boolean;

  inRange: boolean;

  isPreviewing: boolean;

  isToday: boolean;

  holiday?: Holiday;

  onSelect: (date: Dayjs) => void;

  onHover: (date: Dayjs | null) => void;

}

export default function DayCell({

  day,

  isStart,

  isEnd,

  inRange,

  isPreviewing,

  isToday,

  holiday,

  onSelect,

  onHover

}: Props) {

  return (

    <button

      type="button"

      onClick={() => onSelect(day)}

      onMouseEnter={() => onHover(day)}

      onMouseLeave={() => onHover(null)}

      aria-label={day.format("DD MMMM YYYY")}

      className={clsx(

        "dayCell",

        isStart && "rangeStart",

        isEnd && "rangeEnd",

        inRange && "rangeMiddle",

        isPreviewing && "previewRange",

        isToday && "today",

        holiday && "holidayCell"

      )}

    >

      {/* date number */}

      <span className="dateNumber">

        {day.date()}

      </span>


      {/* holiday indicator */}

      {holiday && (

        <span

          className="holidayDot"

          style={{

            background: holiday.color

          }}

        />

      )}

    </button>

  );

}
