import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head/>
      <body 
        className='
        bg-primary 
        text-white
        '
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}