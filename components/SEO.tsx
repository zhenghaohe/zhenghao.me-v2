import { DefaultSeo } from 'next-seo';

export const SEO: React.FC = () => {
  return (
    <DefaultSeo
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
