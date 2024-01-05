import "~/styles/globals.css";

// import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// body className={`font-sans ${inter.variable}`

export const metadata = {
  title: "19-yarenbalamut",
  description: "19-yarenbalamut",
  icons: [{ rel: "icon", url: "/hopiH.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`font-roboto`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
