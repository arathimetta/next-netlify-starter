import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import About from '@components/About';
import Services from '@components/Services';
import Contactus from '@components/Contactus';
import JobCareer from '@components/JobCareer';

export default function Home() {
  return (
    <>
      <Head>
        <title>TEKSERVS</title>
        <meta name="description" content="TEKSERVS" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Head>

      <main>
        <Header />
        <About />
        <Services />
        <JobCareer />
        <Contactus />
      </main>

      <Footer />
    </>
  )
}
