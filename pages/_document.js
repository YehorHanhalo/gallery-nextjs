import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ru">
            <Head>
                <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                />
            </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}