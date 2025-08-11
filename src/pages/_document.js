import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ptBR">
      <Head>
        {" "}
        <link rel="icon" href="/logo-juventude.webp" />{" "}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
