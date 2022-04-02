if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import '@/public/styles/font.css';
import '@/public/styles/global.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

import Nav from '@/components/Nav';
import { SEO } from '@/components/SEO';
import { TagsProvider } from '@/components/tags/TagsContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SEO />
      <div className="w-full h-full">
        <TagsProvider>
          <Nav />
          <main className="w-full">
            <Component {...pageProps} />
          </main>
        </TagsProvider>
      </div>
    </>
  );
};

export default MyApp;
