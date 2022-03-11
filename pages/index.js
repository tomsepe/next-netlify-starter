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
        <p>
          Check out our Patreon Page!
        </p>
      </main>

      <Footer />
    </div>
  )
}
