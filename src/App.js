import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/head/headComponent';

function App() {
  var obj = {
    name: 'Sample Business',
    date: new Date()
  }
  return (
    <Head>
     {obj}
    </Head>
  );
}

export default App;
