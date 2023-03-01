import React from 'react';
import Navbar from '../../components/Navbar';
import MainBody from '../../components/MainBody';
import Footer from '../../components/Footer';

// import SyncButton from '../../components/SyncButton';

function Home() {
  return (
    <div className="app">
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default Home;
