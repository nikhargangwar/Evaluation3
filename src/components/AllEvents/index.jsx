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

AllEvents.propTypes = {
  allEventsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      datetime: PropTypes.string,
      venue: PropTypes.string,
      imgUrl: PropTypes.string,
      isBookmarked: PropTypes.bool,
      isRegistered: PropTypes.bool,
      areSeatsAvailable: PropTypes.bool,
    })
  ).isRequired,
};
export default AllEvents;
