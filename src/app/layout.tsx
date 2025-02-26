  import ThemeProvider from "./ThemeProvider";
  import "@fontsource/playfair-display"; 
  import "@fontsource/poppins"; 
  import "./globals.css";

  export const metadata = {
    title: "Styles By MakG",
  
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
  };

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>
        <link rel="icon" type="image/png"  sizes="192x192" href="/logo.png" />
      
      </head>
        <body>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }

