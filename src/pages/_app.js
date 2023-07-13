import { SearchProvider } from '@/context/SearchContext'
import Layout from '@/layout/Layout'
import GlobalStyles from '@/styles/globals'
import { theme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={ theme }>
        <SearchProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SearchProvider>
      </ThemeProvider>
    </>
  )
}
