import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PrivateRoute from '../routes/PrivateRoute'

export default function Home() {
  return (
    <PrivateRoute>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          HOMEPAGE
        </main>
      </div>
    </PrivateRoute>
  )
}
