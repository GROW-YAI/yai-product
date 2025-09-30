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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
