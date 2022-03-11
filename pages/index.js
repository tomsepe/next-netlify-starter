import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>So You Think Youre An Artist?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to So You Think You;re an Artist />
        <p className="description">
          Check out our <a href = "https://www.patreon.com/soyouthink">Patreon Page!</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
