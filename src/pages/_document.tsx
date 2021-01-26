import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  /////////////////////////////////////////

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta property="og:title" content="슈터디 | SSUtudy " key="title" />
          <meta property="og:description" content="공부 메이트를 찾고 싶을땐? 슈터디! &#10;숭실대 학생들의 스터디 모임을 위해 제작된 플랫폼입니다" />
          <meta property="og:type" content="website" />
          {/* <meta property="og:url" content="https://ssutudy.com" /> */}
          {/* <meta property="og:image:type" content="image/jpeg" /> */}
          {/* <meta property="og:image:width" content="400" /> */}
          {/* <meta property="og:image:height" content="300" /> */}
          {/* <meta property="og:image:alt" content="image description" /> */}
          {/* <meta property="og:image" content="https://ssutudy/image/ogimage.png" /> */}
          <meta property="og:locale" content="ko_KR" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
