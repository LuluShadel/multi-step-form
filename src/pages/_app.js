import Head from 'next/head';
 
function App({ Component, pageProps }) {
    return (
        <>
        <Head>
        <title>Multi-step-form</title>
      </Head>
     
        <Component {...pageProps} />
        </>
    );}
  
    export default App