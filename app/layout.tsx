import "./globals.css";
import "@/styles/calendar.css";
import "@/styles/wall.css";
import "@/styles/notes.css";

export const metadata = {
  title: "Interactive Wall Calendar",
  description: "GSAP animated calendar",
};

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
