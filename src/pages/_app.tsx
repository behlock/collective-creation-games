import Script from 'next/script'
import { CookiesProvider } from 'react-cookie'

import '@/styles/global.scss'

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://stats-peach-alpha.vercel.app/api/stats.js" />
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </>
  )
}

export default MyApp
