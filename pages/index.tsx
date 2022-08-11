import fs from 'fs';
import { getMDXComponent } from 'mdx-bundler/client';
import { InferGetStaticPropsType } from 'next';
import path from 'path';
import { useMemo } from 'react';
import Image from 'next/image';

import { Experience } from '@/components/Experience';
import { components } from '@/components/MDXComponents';
import { Spacer } from '@/components/Spacer';
import { MyPic} from '@/components/MyPic';
import {DynamicPic} from '@/components/DynamicPic';

import { getAllPostsMeta, loadMDX } from '@/utils/loadMDX';
import { PostPreviewList } from './posts';

export const getStaticProps = async () => {
  const file = path.resolve(process.cwd(), 'content', 'home.mdx');
  const source = fs.readFileSync(file, 'utf-8');

  const { code } = await loadMDX(source);
  const posts = await getAllPostsMeta()  

  return { props: { code, posts } };
};

const mdxComponents = { ...components, Experience, Spacer, Image, MyPic,DynamicPic};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ code, posts }: Props) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  
  return (
    <article className="max-w-[75ch] mx-auto pt-12 pb-28 px-5">
      <Component components={mdxComponents} />
    </article>
  );
}