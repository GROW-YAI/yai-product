import ThemeProvider from "./ThemeProvider";
import "@fontsource/playfair-display"; 
import "@fontsource/poppins"; 
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

