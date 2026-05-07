import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
};

const SITE_NAME = 'Qloqal';
const SITE_URL = 'https://qloqal.com';
const DEFAULT_OG = '/og-default.png';

export default function Seo({ title, description, ogImage = DEFAULT_OG, canonical, noindex }: Props) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {canonical && <link rel="canonical" href={url} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
}
