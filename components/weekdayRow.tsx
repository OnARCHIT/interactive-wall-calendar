"use client";

import { WEEKDAYS } from "@/lib/constants";

export default function WeekdayRow(){

  return(

    <div className="weekdayRow">

      {WEEKDAYS.map(day => (

        <div
          key={day}
          className="weekdayCell"
        >

          {day}

        </div>

      ))}

    </div>

  );

}
