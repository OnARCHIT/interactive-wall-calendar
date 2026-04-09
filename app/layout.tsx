import type { Metadata } from "next";
import "./globals.css";

/* global styles */

import "@/styles/calendar.css";
import "@/styles/wall.css";
import "@/styles/notes.css";


/* metadata */

export const metadata: Metadata = {

  title: "Interactive Wall Calendar",

  description:
    "A modern interactive wall calendar with range selection, notes, and animations."

};


/* layout */

export default function RootLayout({

  children,

}: {

  children: React.ReactNode;

}) {

  return (

    <html lang="en">

      <body className="appBody">

        <main className="appContainer">

          {children}

        </main>

      </body>

    </html>

  );

}
