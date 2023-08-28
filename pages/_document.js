import Modal from '@/components/Modal'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='font-lexend'>
        <Main />
        <NextScript />
        <div id='modal-container'></div>
      </body>
    </Html>
  )
}
