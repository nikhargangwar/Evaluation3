/* eslint-disable react/prop-types */
import React from 'react';
import './AllEvents.css';
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

export default AllEvents;
