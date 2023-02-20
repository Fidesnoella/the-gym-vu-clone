import '@/styles/globals.css'
import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
