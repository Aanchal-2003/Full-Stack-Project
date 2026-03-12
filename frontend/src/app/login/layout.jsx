import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
