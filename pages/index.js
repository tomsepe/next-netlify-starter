import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WELCOME!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>Coming Soon: </h2>
        <Header title="So You Think You&apos;re an Artist Podcast" />

        <p>
        <img src="/images/logo.png" width="400" height="400" />
        </p>

                <p><h2>
    Please visit out our <a href = "https://www.patreon.com/thinkart">Patreon Page!</a>
        </h2></p>
        
      </main>

      <Footer />
    </div>
  )
}
