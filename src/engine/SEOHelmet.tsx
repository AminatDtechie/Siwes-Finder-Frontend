import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHelmet: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
}) => {
  return (
    <Helmet>
      {/* Page Title */}
      <title>SFinder | {title && title}</title>

      {/* Meta Description */}
      {description && <meta name="description" content={description} />}

      {/* Meta Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph Meta Tags (For Social Media Previews) */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
    </Helmet>
  );
};

export default SEOHelmet;
