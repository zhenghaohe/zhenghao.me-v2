import { DefaultSeo } from 'next-seo';

export const SEO: React.FC = () => {
  return (
    <DefaultSeo
      title="Zhenghao He"
      description="Software Engineer"
      canonical="https://zhenghao.me/"
      openGraph={{
        url: 'https://zhenghao.me/',
        title: 'Zhenghao',
        description: 'Software Engineer',
        site_name: 'zhenghao.me'
      }}
      twitter={{
        handle: '@he_zhenghao',
        site: '@he_zhenghao',
        cardType: 'summary_large_image'
      }}
    />
  );
};
