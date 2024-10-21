import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import GlobalStyle from './../styles/GlobalStyle'

// Default theme
const defaultTheme = {
  colors: {
    text: '#444444', // Default text color
    link: '#F5A700', // Default link color
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <NextThemeProvider>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
                <Component {...pageProps} />
        </ThemeProvider>
      </NextThemeProvider>
  )
}

export default MyApp
