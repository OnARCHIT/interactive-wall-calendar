"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export interface DateRange {

  start: Dayjs | null;

  end: Dayjs | null;

}

export default function useCalendar(){

  const [month,setMonth] = useState<Dayjs>(dayjs());

  const [range,setRange] = useState<DateRange>({
    start:null,
    end:null
  });


  /* navigation */

  function nextMonth(){

    setMonth(prev => prev.add(1,"month"));

    resetRange();

  }

  function prevMonth(){

    setMonth(prev => prev.subtract(1,"month"));

    resetRange();

  }

  function goToday(){

    setMonth(dayjs());

    resetRange();

  }


  /* helpers */

  function resetRange(){

    setRange({

      start:null,
      end:null

    });

  }


  function isSameMonth(date:Dayjs){

    return date.month() === month.month();

  }


  return {

    month,

    setMonth,

    nextMonth,

    prevMonth,

    goToday,

    range,

    setRange,

    resetRange,

    isSameMonth

  };

}