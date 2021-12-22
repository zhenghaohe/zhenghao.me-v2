/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { formateDateFull, validDate } from '@/utils/formatDate';

type Props = { meta: PostMeta };

export const PostPage: React.FC<Props> = ({ meta, children }) => {
  console.log(meta);
  
  return (
    <>
      <NextSeo
        title={`${meta.title} - Zhenghao`}
        description={meta.description}
        canonical={`https://zhenghao.me/posts/${meta.slug}`}
        openGraph={{ url: `https://zhenghao.me/posts/${meta.slug}` }}
      />
      <Head>
        <link rel="stylesheet" href="/styles/prism.css" />
      </Head>
      <article className="max-w-[75ch] mx-auto pt-12 pb-28  px-5">
        <div>
          <h1 className="mb-1 text-3xl font-black capitalize md:text-4xl">{meta.title}</h1>
          <div className="flex items-center pt-4 pb-8 text-sm font-thin uppercase text-warmGray-500 dark:text-warmGray-400">
            <time dateTime={validDate(meta.date)}>{formateDateFull(meta.date)}</time>
          </div>
          <p className="italic">{meta.description}</p>
        </div>
        {children}
      </article>
    </>
  );
};
