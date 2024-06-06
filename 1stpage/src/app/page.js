import Image from "next/image";
import Head from 'next/head';
import Header from '../components/header';
import Main from '../components/main';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/testimonials';
import Download from '../components/downloads';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BeautyCheck</title>
        <meta name="description" content="Discover Your Best Skin with BeautyCheck" />
      </Head>
      
      <Header />
      
      <main>
        <Main />
        <HowItWorks />
        <Testimonials />
        <Download />
      </main>
      
      <Footer />
    </div>
  );
}