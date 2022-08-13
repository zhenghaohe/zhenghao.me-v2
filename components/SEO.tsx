import { DefaultSeo } from 'next-seo';

export const SEO: React.FC = () => {
  return (
    <DefaultSeo
    title="Zhenghao's site"
    description="The official site of Zhenghao He, a software engineer and a TypeScript/JavaScript enthusiast."
      openGraph={{
        site_name: 'zhenghao.io'
      }}
      twitter={{
        handle: '@he_zhenghao',
        site: '@he_zhenghao',
        cardType: 'summary_large_image'
      }}
    />
  );
};
