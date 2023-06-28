import Navbar from "@/components/Navbar";
import "./globals.css";
import { cabin, lato, montserrat, mulish, sacramento } from "./fonts";
export const metadata = {
  title: "Sheddy Port",
  description: "Sheddy's portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} ${lato.variable} ${montserrat.variable} ${sacramento.variable} ${cabin.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
