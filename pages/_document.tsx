import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Wanis's portfolio</title>
      </Head>
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
