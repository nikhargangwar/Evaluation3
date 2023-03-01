/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
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
ShowEventDetails.propTypes = {
  eventData: PropTypes.shape({
    id: PropTypes.number.isRequired,

    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    isRegistered: PropTypes.bool.isRequired,
    areSeatsAvailable: PropTypes.bool.isRequired,
  }).isRequired,
};
export default ShowEventDetails;
