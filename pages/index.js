import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sunleyi!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello  I'am sunleyi." />
        <p className="description">
          This is my handsome dad: <a href='https://www.douyin.com/user/MS4wLjABAAAAqUpfLJitHm_lw8qOdtSIfiNLqv2N2MNtqH8gaaTfW3I'>click here</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
