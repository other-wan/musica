import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Ridwan is a web developer passionate about making impact and creating solutions through technology. He is focused on developing products that provide outstanding experiences and are accessible to users."
        />
        <meta
          content="wan, _wan, other-wan, Tahir Ridwan, Tahir Muhammed Ridwan, Ridwan Tahir, React Developer, Nextjs, Frontend dev, Javascript, Typescript"
          name="keywords"
        />

        <meta content="https://tahir-next.vercel.app" property="og:url" />
        <meta content="Tahir Ridwan" property="og:title" />
        <meta
          content="Ridwan is a web developer passionate about making impact and creating solutions through technology. He is focused on developing products that provide outstanding experiences and are accessible to users."
          property="og:description"
        />

        <link rel="canonical" href="https://tahir-next.vercel.app" />

        {/* <link rel="icon" href="/logo.png" /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
