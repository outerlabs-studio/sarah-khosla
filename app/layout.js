import localFont from 'next/font/local'
import { GlobalStyle } from 'styles'
import { StyledComponentsRegistry, RealViewport } from 'lib'
import { Nav, ScrollWrapper } from 'components'

const haffer = localFont({
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

export const metadata = {
  title: 'Sarah Khosla',
  description: 'Sample description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={haffer.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <RealViewport />
          <ScrollWrapper>
            <Nav />
            {children}
          </ScrollWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
