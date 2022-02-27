interface PostMeta {
  title: string;
  /** Weather the blog page will be built */
  published: boolean;
  /** Weather the blog page listed in the website */
  listed: true;
  date: string;
  lastUpdateDate?: string;
  description: string;
  tags: string;
  slug: string;
}
