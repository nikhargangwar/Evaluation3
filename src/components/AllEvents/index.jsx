/* eslint-disable react/prop-types */
import React from 'react';
import './AllEvents.css';
import PropTypes from 'prop-types';
import Card from '../Card';

function AllEvents({ allEventsData }) {
  return (
    <div className="card-space-wrapper">
      {allEventsData.map((event, id) => (
        <Card id={id} key={event.id} eventData={event} />
      ))}
    </div>
  );
}

AllSongs.propTypes = {
  allSongsData: PropTypes.object,
};
export default AllEvents;
