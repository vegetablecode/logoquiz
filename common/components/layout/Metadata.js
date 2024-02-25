const Metadata = () => {
  const title =
    'SUPERLOGO | Get a stunning logo for your brand in 12 hours or less!';
  const description =
    'Take a quick quiz and let us design a custom logo that reflects your style, colors, and vision. No hassle, no hidden fees, just 100% satisfaction guaranteed.';
  const imageUrl = 'https://www.superlogo.store/preview.png';
  const url = 'www.superlogo.store';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="SUPERLOGO" />
      <meta property="og:url" content={`${url}`} />
      <meta name="og:image" property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:card" property="twitter:card" content={imageUrl} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:creator" content="Kamil Uhryn" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default Metadata;
