import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import Script from 'next/script'
import React from 'react';
import Dropzone from 'dropzone';

export default function Home() {
  function initDropzone() {
    let imgDropzone = new Dropzone("#img-dropzone");
    imgDropzone.on("addedfile", file => {
      console.log('File added: ${file.name}');
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Real-ESRGAN</title>
        <meta name="description" content="DIGIMAP Final Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Real-ESRGAN
        </h1>

        <form action="/file-upload" class="dropzone" id="img-dropzone"></form>
            <script>initDropzone();</script>

        <div className={styles.grid}>
          <a className={styles.card}>
            
          </a>
        </div>

        <div id="display-image"></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

//Welcome to <a href="https://nextjs.org">Next.js!</a>