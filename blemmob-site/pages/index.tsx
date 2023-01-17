import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BlemMob from '../components/blemmob';
import styles from '../styles/Home.module.css';

const Home: NextPage =() => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blem Mob | Your personal AI Generate Marketing</title>
        <meta name="description" content="Generate Branding description for your product" />
      
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlemMob />
    </div>
  );
};

export default Home;
 