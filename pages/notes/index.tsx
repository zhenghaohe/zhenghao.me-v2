import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { formateDatePreview, validDate } from '@/utils/formatDate';
import { getAllNotesMeta } from '@/utils/loadMDX';

export const getStaticProps = async () => {
  const notes = await getAllNotesMeta();
  return { props: { notes } };
};

export const formatTags = (tags: string) => {
  let formattedTagsArr: string[] = [];
  for (const tagStr of tags.split(',')) {
    formattedTagsArr.push(`#${tagStr}`);
  }
  return formattedTagsArr.join(', ');
};

const PostPreview: React.FC<PostMeta> = ({ slug, title, date, tags }) => {
  return (
    <li className="my-8">
      <Link href={`notes/${slug}`}>
        <a className="flex items-center p-1 capitalize transition-colors duration-200 rounded outline-none">
          <p className="text-sm mr-8 min-w-[50px]">
            <time dateTime={validDate(date)}>{formateDatePreview(date)}</time>
          </p>
          <h3 className="font-light link-btn">{title}</h3>
        </a>
      </Link>
      <small>{formatTags(tags)}</small>
    </li>
  );
};

export const PostPreviewList: React.FC<{ posts: PostMeta[] }> = ({ posts }) => {
  const postsByYear: Record<string, PostMeta[]> = {};

  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear();
    const knownPosts = postsByYear[year] || [];
    postsByYear[year] = [...knownPosts, post];
  });

  return (
    <>
      {Object.entries(postsByYear)
        .reverse()
        .map(([year, posts]) => (
          <div key={year} className="w-full">
            <h2 className="pl-1 text-lg font-semibold">{year}</h2>
            <ul>
              {posts.map((post) => (
                <PostPreview key={post.slug} {...post} />
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Notes: React.FC<Props> = ({ notes }) => {
  return (
    <>
      <NextSeo
        title="Posts"
        canonical="https://zhenghao.io/notes"
        openGraph={{ url: 'https://zhenghao.io/notes' }}
      />
      
      <div className="w-full sm:max-w-[75ch] m-auto px-5 py-16 flex flex-col justify-center items-center">
      <article className='self-start mb-10'>
          <details>
            <summary>&nbsp;about this page...</summary>
              <p>
                Here are my reviews, summaries, takes, or opinion pieces on books, movies, tweets,
                or podcasts I have consumed. The contents here tend to be less tech-y, sometimes less clear and
                organized. And they might look self-serving as some of them are just notes I wrote
                to myself.
              </p>
              <p>
                Essentially, here are posts I don't want or have the time to give a complete article
                treatment. That being said, hope you can find any of them valuable to you.
              </p>

          </details>
        </article>
        <PostPreviewList posts={notes} />
      </div>
    </>
  );
};

export default Notes;
