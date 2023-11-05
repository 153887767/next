import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'
import Alert from '../../components/alert'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <script src="https://www.googletagmanager.com/gtag/js?id=123" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=456"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly`)
        }
      />
      <h1>First Post</h1>
      <Alert type="success">Success</Alert>
    </Layout>
  )
}
