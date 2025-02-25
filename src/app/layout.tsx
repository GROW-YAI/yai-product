  import ThemeProvider from "./ThemeProvider";
  import "@fontsource/playfair-display"; 
  import "@fontsource/poppins"; 
  import "./globals.css";

  export const metadata = {
    title: "StyleSphere",
  
    icons: {
      icon: "/cloth.png",
      shortcut: "/cloth.png",
      apple: "/cloth.png",
    },
  };

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>
        <link rel="icon" type="image/png"  sizes="192x192" href="/cloth.png" />
      
      </head>
        <body>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }

