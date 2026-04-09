import { Dayjs } from "dayjs";


/* ----------------------------------
   DATE RANGE
---------------------------------- */

export interface DateRange {

  start: Dayjs | null;

  end: Dayjs | null;

}


/* ----------------------------------
   HOLIDAY STRUCTURE
---------------------------------- */

export interface Holiday {

  date: string;

  title: string;

  color: string;

  image?: string;

  description?: string;

  startYear?: string;

  category?:

  | "religious"
  | "national"
  | "cultural"
  | "international";

}


/* ----------------------------------
   USER EVENT
---------------------------------- */

export interface CalendarEvent {

  id: string;

  date: string;

  title: string;

  description?: string;

  color?: string;

  tag?:

  | "birthday"
  | "meeting"
  | "exam"
  | "reminder"
  | "personal";

}


/* ----------------------------------
   NOTES
---------------------------------- */

export interface CalendarNote {

  id: string;

  content: string;

  createdAt: string;

  range?: DateRange;

}


/* ----------------------------------
   HERO IMAGE
---------------------------------- */

export interface HeroImageConfig {

  month: number;

  imageUrl: string;

  dominantColor?: string;

}


/* ----------------------------------
   THEME
---------------------------------- */

export interface CalendarTheme {

  primary: string;

  secondary: string;

  accent?: string;

  text?: string;

}


/* ----------------------------------
   GRID CELL STATE
---------------------------------- */

export interface DayCellState {

  date: Dayjs;

  isToday: boolean;

  isHoliday: boolean;

  isStart: boolean;

  isEnd: boolean;

  inRange: boolean;

}


/* ----------------------------------
   STORAGE STRUCTURE
---------------------------------- */

export interface LocalCalendarStorage {

  notes: CalendarNote[];

  events: CalendarEvent[];

  theme?: CalendarTheme;

}


/* ----------------------------------
   RANGE SELECTION HOOK TYPES
---------------------------------- */

export interface RangeSelectionHook {

  range: DateRange;

  selectDate: (date: Dayjs) => void;

  startDrag: (date: Dayjs) => void;

  updateDrag: (date: Dayjs) => void;

  endDrag: () => void;

  isInRange: (date: Dayjs) => boolean;

  reset: () => void;

}


/* ----------------------------------
   CALENDAR HOOK TYPES
---------------------------------- */

export interface CalendarHook {

  month: Dayjs;

  nextMonth: () => void;

  prevMonth: () => void;

  goToday: () => void;

  range: DateRange;

  setRange: (range: DateRange) => void;

}