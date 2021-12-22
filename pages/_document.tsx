/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/images/icon-48x48.png" />
          <link rel="apple-touch-icon" href="/images/icon-192x192.png" />
          <link rel="manifest" href="/manifest.json" />
          <script async src="https://cdn.splitbee.io/sb.js" />
        </Head>
        <body className="dark">
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(){var a=document.body.classList;a.remove("dark");var e=localStorage.getItem("theme");e?a.add(e.replace(/"/g,"")):window.matchMedia("(prefers-color-scheme: dark)").matches?a.add("dark"):a.add("light")}()`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
