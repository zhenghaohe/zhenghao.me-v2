import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { getAllNotesMeta } from '@/utils/loadMDX';
import { PostPreviewList } from 'pages/posts';


export const getStaticProps = async () => {
  const notes = await getAllNotesMeta();
  return { props: { notes } };
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
