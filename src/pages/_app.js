import { SearchProvider } from '@/context/SearchContext'
import Layout from '@/layout/Layout'
import GlobalStyles from '@/styles/globals'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <SearchProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchProvider>
    </>
  )
}
