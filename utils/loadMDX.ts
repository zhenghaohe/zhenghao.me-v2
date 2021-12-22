import fs from 'fs';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';
import rehypeAutolink from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkPrism from 'remark-prism';
import glob from 'tiny-glob';

import { autoLinkHeadingsOptions } from './rehypeAutolinkPlugin';

const RootPath = process.cwd();
const PostPath = path.join(RootPath, 'posts');

export async function loadMDX(source: string) {
  const bundle = await bundleMDX(source, {
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm, remarkPrism];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        [rehypeAutolink, autoLinkHeadingsOptions]
      ];
      return options;
    }
  });

  return bundle;
}

/**
 * Get meta data of all posts
 */
export const getAllPostsMeta = async () => {
  const allPostPaths = await glob(`${PostPath}/**/*.mdx`);

  return allPostPaths
    .map((postPath): PostMeta => {
      const post = fs.readFileSync(path.join(RootPath, postPath), 'utf-8');

      const slug = path.basename(postPath).replace('.mdx', '');
      const meta = matter(post).data;

      return { ...meta, slug } as PostMeta;
    })
    .filter((meta) => meta.published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
};

/**
 * Get a single post content by slug
 */
export const getPost = async (slug: string) => {
  const source = fs.readFileSync(path.join(PostPath, `${slug}.mdx`), 'utf-8');

  const { code, frontmatter } = await loadMDX(source);

  const meta = { ...frontmatter, slug } as PostMeta;
  return { meta, code };
};
