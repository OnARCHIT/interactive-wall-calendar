"use client";

import { useState } from "react";
import { Dayjs } from "dayjs";

export interface DateRange {

  start: Dayjs | null;

  end: Dayjs | null;

}

export default function useRangeSelection(){

  const [range,setRange] = useState<DateRange>({
    start:null,
    end:null
  });

  const [hover,setHover] = useState<Dayjs | null>(null);

  const [dragging,setDragging] = useState(false);


  /* click selection */

  function selectDate(date:Dayjs){

    if(!range.start){

      setRange({

        start:date,
        end:null

      });

      return;

    }


    if(!range.end){

      if(date.isBefore(range.start)){

        setRange({

          start:date,
          end:range.start

        });

      }

      else{

        setRange({

          start:range.start,
          end:date

        });

      }

      return;

    }


    setRange({

      start:date,
      end:null

    });

  }


  /* drag selection */

  function startDrag(date:Dayjs){

    setDragging(true);

    setRange({

      start:date,
      end:null

    });

  }


  function updateDrag(date:Dayjs){

    if(!dragging || !range.start) return;

    if(date.isBefore(range.start)){

      setRange({

        start:date,
        end:range.start

      });

    }

    else{

      setRange({

        start:range.start,
        end:date

      });

    }

  }


  function endDrag(){

    setDragging(false);

  }


  /* helpers */

  function isInRange(date:Dayjs){

    if(!range.start) return false;

    const end = range.end || hover;

    if(!end) return false;

    return (

      date.isAfter(range.start.subtract(1,"day")) &&
      date.isBefore(end.add(1,"day"))

    );

  }


  function preview(date:Dayjs){

    setHover(date);

  }


  function clearPreview(){

    setHover(null);

  }


  function reset(){

    setRange({

      start:null,
      end:null

    });

  }


  return {

    range,

    setRange,

    selectDate,

    startDrag,

    updateDrag,

    endDrag,

    preview,

    clearPreview,

    isInRange,

    reset,

    dragging

  };

}