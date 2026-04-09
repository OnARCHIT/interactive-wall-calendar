# Interactive Wall Calendar (Next.js + React)

A polished **interactive wall-style calendar component** inspired by physical wall calendars.  
Designed with focus on **visual hierarchy, usability, and smooth interaction**.

This project demonstrates the ability to transform a static UI concept into a **fully functional, responsive, and scalable frontend component** using modern web technologies.

---

# Preview

Hero image acts as visual anchor → Month grid → Range selection → Notes panel

Features smooth animations, tactile UI feel, and structured architecture.

---

# Features

## Core Features

### Wall Calendar Aesthetic
- Hero image at top acts as visual anchor
- Clean typography and spacing
- Card-based layout mimicking physical calendar
- Balanced visual hierarchy

### Date Range Selection
- Select start and end date
- Highlighted range visualization
- Hover preview before selection
- Reset selection by clicking new date

### Notes Panel
- Write reminders, goals, events
- Context-aware range display
- Stored locally in browser (localStorage)

### Holiday Indicators
- Highlight important dates
- Color markers for festivals
- Easily extendable dataset

### Fully Responsive
Desktop:
- Split layout
- Side-by-side notes and calendar

Mobile:
- stacked layout
- touch friendly date selection

---

# Tech Stack

| Layer | Technology |
|------|------------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| UI | React |
| Animation | GSAP |
| Date Engine | Day.js |
| Styling | CSS |
| State | React Hooks |
| Storage | localStorage |

---

# Folder Structure
app/
layout.tsx
page.tsx

components/

calendar/
WallCalendar.tsx
CalendarGrid.tsx
DayCell.tsx
MonthHeader.tsx
HeroImage.tsx
NotesPanel.tsx
RangeHighlight.tsx

ui/
Button.tsx
Card.tsx
Badge.tsx

animations/
calendarAnimations.ts
flipAnimation.ts

data/
holidays.ts
images.ts

hooks/
useCalendar.ts
useLocalStorage.ts
useRangeSelection.ts

lib/
dateUtils.ts
themeExtractor.ts
constants.ts

styles/
calendar.css
wall.css
notes.css

types/
calendar.ts

public/images/
calendarHero.jpg
diwali.jpg
eid.jpg
holi.jpg
gurunank.jpg
easter.jpg
christmas.jpg

---

# Installation

## 1. Clone repository

---

## 2. Install dependencies

---

## 3. Run development server

---
Open:

---

# Usage

### Select Date Range

Click start date → click end date

Range will be highlighted.

### Add Notes

Write reminders in notes section.

Notes persist using localStorage.

### Change Month

Use navigation arrows.

---

# Animations

Implemented using GSAP:

- calendar entrance animation
- grid stagger animation
- micro hover interactions
- flip-style transitions ready

---

# Design Principles

### Visual hierarchy
hero image anchors layout

### usability
clear feedback for selection

### modular architecture
separation of UI, logic, data

### scalability
easy to extend with:

- recurring events
- API integration
- AI reminders
- drag selection
- theme switching

---

# Future Improvements

- drag-to-select range
- dark mode
- event tags
- yearly view
- Google calendar sync
- reminder notifications
- theme color extraction from image
- holiday popup with description

---

# Author
Archit Kumar
B.Tech Civil Engineering
Cnetral University of Jharkhand
Submmited to 
SWE Summer Intern 
Developed as part of frontend engineering demonstration.

Focus areas:

- component architecture
- interaction design
- animation systems
- UI consistency

---
