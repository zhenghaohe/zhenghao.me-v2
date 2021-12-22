import { DefaultSeo } from 'next-seo';

export const SEO: React.FC = () => {
  return (
    <DefaultSeo
      title="Zhenghao He"
      description="Software Engineer"
      canonical="https://zhenghao.io/"
      openGraph={{
        url: 'https://zhenghao.io/',
        title: 'Zhenghao',
        description: 'Software Engineer',
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
