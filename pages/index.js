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
          Check out our <Link href="https://www.patreon.com/thinkart">Patreon Page!</Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
