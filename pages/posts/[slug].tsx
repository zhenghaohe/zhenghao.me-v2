import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useMemo } from 'react';

import { components } from '@/components/MDXComponents';
import { PostPage } from '@/components/PostPage';
import { getAllPostsMeta, getPost } from '@/utils/loadMDX';
import { Feed } from 'feed';
import { writeFileSync } from 'fs';
import Tweet from '@/components/Tweet';
import { getTweets } from '@/utils/twitter';

const generateRSSFeed = (posts: PostMeta[]) => {
  const date = new Date();

  const baseUrl = 'https://zhenghao.io';
  const author = {
    name: 'Zhenghao He',
    email: 'zhenghaohe17@gmail.com',
    link: 'https://twitter.com/he_zhenghao'
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: "Zhenghao's blog",
    description:
      'You can find me talking about topics related to JavaScript, TypeScript, React, Web development and technical/coding interviews',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`
    },
    updated: date,
    author,
    copyright: `All rights reserved ${new Date().getFullYear()}, Zhenghao He`
  });

  posts.forEach((post) => {
    const { slug, title, date, description, tags } = post;
    const url = `${baseUrl}/posts/${slug}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content: description,
      author: [author],
      date: new Date(date),
      category: tags.split(',').map((name) => ({ name }))
    });
  });

  // Write the RSS output to a public file, making it
  // accessible at ashleemboyer.com/rss.xml
  writeFileSync('public/rss.xml', feed.rss2());
};

export const getStaticPaths = async () => {
  const posts = await getAllPostsMeta();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  generateRSSFeed(posts);

  return {
    paths,
    fallback: false // 404
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug as string;
  const post = await getPost(slug);
  
  const tweets = await getTweets(post.tweetIDs);
  
  return { props: { ...post, tweets} };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const Post: React.FC<Props> = ({ meta, code, tweets }) => {  
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((tweet) => tweet.id === id);
    
    return <Tweet {...tweet} />;
  };
  
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <PostPage meta={meta}>
      <Component components={{ ...components, StaticTweet }} />
    </PostPage>
  );
};

export default Post;
