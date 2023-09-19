import localFont from 'next/font/local'

const haffer = localFont({
  adjustFontFallback: 'Arial',
  variable: '--font',
  src: [
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
      path: '../assets/fonts/HafferSQ-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default haffer
