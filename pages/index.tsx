import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/myStyle.module.css'
import Signin from './components/Home/Signin';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SignUp from './components/Home/SignUp';

export default function Home() {
  return (
    <div>
      <Head>
        <title>EventPlanner</title>
        <meta name="description" content="My awesome Next.js app" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      
     <Navbar/>

      <Hero/>
      
      <MainSection/>

      <CardSection/>

      <Footer/>
      
      {/* <Signin/>

      <SignUp/> */}
    </div>
  );
}
