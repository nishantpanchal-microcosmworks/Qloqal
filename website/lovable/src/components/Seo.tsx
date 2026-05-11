import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
};

export function Seo({ title, description, ogImage = "/og-default.png", canonical }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#929a68" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  );
}
