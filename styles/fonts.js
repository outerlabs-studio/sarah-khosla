import localFont from 'next/font/local'

const haffer = localFont({
  variable: '--font',
  display: 'block',
  src: [
    {
      path: '../public/fonts/HafferSQ-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/HafferSQ-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/HafferSQ-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default haffer
