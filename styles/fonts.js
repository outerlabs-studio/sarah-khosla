import localFont from 'next/font/local'

export const haffer = localFont({
  adjustFontFallback: 'Arial',
  src: [
    {
      path: '../assets/fonts/HafferSQ-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HafferSQ-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HafferSQ-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/HafferSQ-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HafferSQ-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})
