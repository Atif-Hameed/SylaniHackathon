import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css"
            integrity="sha512-ZQQvjyN9olNcEo6KNSx/IWlD/eqHnZ2whjgopvpiCeg/4UMpwX4/Hq3A6m4n8W86Z6R5S6YBh5U5z8j5X+0CyA=="
            crossOrigin="anonymous"
          />
          
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
          <link rel="stylesheet" href="/myStyles.css" />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js"
            integrity="sha512-sdOZa+oYQKjvU8gfuOeKX9TzT2u/MDAVc+xCg/mZKjwZtcYAmFvPqwN+IyC9Ry83jJij66D+61ki7bZd0nKf7w=="
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
