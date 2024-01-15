import { Provider } from 'react-redux';
import store from '../../redux/store';

import Head from 'next/head';
import "../style.css"
 
function App({ Component, pageProps }) {
    return (
      <Provider store={store}>


        <Head>
        <title>Multi-step-form</title>
        
      </Head>
     
        <Component {...pageProps} />
        </Provider>
    );}
  
    export default App