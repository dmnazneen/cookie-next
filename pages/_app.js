import GlobalContext from '@/context/GlobalContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalContext>
        <Component {...pageProps} />
      </GlobalContext>
    </>
  )
}
