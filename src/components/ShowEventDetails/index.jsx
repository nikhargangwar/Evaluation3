/* eslint-disable react/prop-types */
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ShowEventDetailsCard from '../ShowEventDetailsCard';

import './ShowEventDetails.css';
// import SyncButton from '../../components/SyncButton';

function ShowEventDetails({ eventData }) {
  return (
    <div className="ShowEventDetails">
      <Navbar />
      <ShowEventDetailsCard eventData={eventData} />
      <Footer />
    </div>
  );
}

export default ShowEventDetails;
