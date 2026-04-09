import dayjs, { Dayjs } from "dayjs";


/* -----------------------------
   basic helpers
----------------------------- */

export function today(){

  return dayjs();

}


export function formatISO(date:Dayjs){

  return date.format("YYYY-MM-DD");

}


export function formatDisplay(date:Dayjs){

  return date.format("DD MMM YYYY");

}


export function isToday(date:Dayjs){

  return date.isSame(dayjs(),"day");

}


export function isSameDay(a:Dayjs,b:Dayjs){

  return a.isSame(b,"day");

}


/* -----------------------------
   month helpers
----------------------------- */

export function getMonthMatrix(

  month:Dayjs

){

  const start = month.startOf("month");

  const days = start.daysInMonth();

  const startWeekday = start.day();

  const padding = Array(startWeekday).fill(null);

  const dates = [...Array(days)].map((_,i)=>

    start.add(i,"day")

  );

  return [

    ...padding,

    ...dates

  ];

}


/* -----------------------------
   range helpers
----------------------------- */

export function normalizeRange(

  start:Dayjs,

  end:Dayjs

){

  if(end.isBefore(start)){

    return {

      start:end,

      end:start

    };

  }

  return {start,end};

}


export function isBetween(

  date:Dayjs,

  start?:Dayjs|null,

  end?:Dayjs|null

){

  if(!start || !end) return false;

  return (

    date.isAfter(start.subtract(1,"day")) &&
    date.isBefore(end.add(1,"day"))

  );

}


/* -----------------------------
   navigation helpers
----------------------------- */

export function nextMonth(

  current:Dayjs

){

  return current.add(1,"month");

}


export function prevMonth(

  current:Dayjs

){

  return current.subtract(1,"month");

}