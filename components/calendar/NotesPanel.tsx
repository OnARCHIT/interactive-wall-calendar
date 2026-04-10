"use client";

import { DateRange } from "@/types/calendar";

interface Props {

  range: DateRange;

  notes: string;

  setNotes: (notes:string)=>void;

}

export default function NotesPanel({

  range,

  notes,

  setNotes

}: Props) {

  return (

    <div className="notesWrapper">

      <div className="notesHeader">

        <h3>

          Notes

        </h3>


        {range.start && (

          <span className="rangeBadge">

            {range.start.format("DD MMM")}

            {range.end && (

              <>
                {" "}
                → {range.end.format("DD MMM")}
              </>

            )}

          </span>

        )}

      </div>


      <textarea

        value={notes}

        onChange={(e)=>setNotes(e.target.value)}

        placeholder="Write reminders, goals, birthdays..."

        className="notesInput"

      />


      <div className="notesHint">

        stored locally in browser

      </div>

    </div>

  );

}