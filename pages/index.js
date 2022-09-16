import Head from 'next/head'
import Image from 'next/image'
import Characters from '../components/Characters'
import styles from '../styles/Home.module.css'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Rick and Morty</h1>
      <QueryClientProvider client={queryClient}>
        <Characters /> 
      </QueryClientProvider>
    </div>
  )
}
