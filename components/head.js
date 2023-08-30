import { NextSeo } from 'next-seo'
import NextHead from 'next/head'

export default function CustomHead({
  title,
  description,
  image,
  keywords,
  theme = { mask: '#000000', tile: '#ffffff', color: '#000000' },
  twitter = { handle: '@kyryloren' },
}) {
  return (
    <>
      <NextHead>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta
          name="robots"
          content={
            process.env.NODE_ENV !== 'development'
              ? 'index,follow'
              : 'noindex,nofollow'
          }
        />
        <meta
          name="googlebot"
          content={
            process.env.NODE_ENV !== 'development'
              ? 'index,follow'
              : 'noindex,nofollow'
          }
        />

        <meta
          name="keywords"
          content={keywords && keywords.length ? keywords.join(',') : keywords}
        />
        <meta name="author" content="Kyrylo Orlov" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US" />

        {/* START FAVICON */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color={theme.mask}
        />
        <meta name="msapplication-TileColor" content={theme.tile} />
        <meta name="theme-color" content={theme.tile} />
        <link rel="icon" href="/favicon/favicon.ico" />
        {/* END FAVICON */}

        <title>{title}</title>
      </NextHead>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: 'website',
          locale: 'en_US',
          images: [
            {
              url: image ? image.url : '/og-image.png',
              width: image ? image.width : 1200,
              height: image ? image.height : 630,
              alt: title,
            },
          ],
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          site_name: '',
        }}
        twitter={{
          handle: twitter.handle,
          cardType: 'summary_large_image',
        }}
      />
    </>
  )
}
