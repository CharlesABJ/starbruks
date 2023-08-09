import Head from "next/head";

export const metadata = {
  title: "Starbruks",
  description: "Website Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
