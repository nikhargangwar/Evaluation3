/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { UPDATE_BOOKMARK, GET_EVENT_BY_ID } from '../../constants/apiEndPoints';

import makeRequest from '../../utils/makeRequest';

// import { fa-solid fa-bookmark} from '@fortawesome/free-solid-svg-icons';
// import Bookmark from '../assets/bookmark-solid.svg';
import './CardDetails.css';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import ShowEventDetails from '../../components/ShowEventDetails';

function CardDetails() {
  // const [isBookmark, setIsBookmark] = useState(false);
  // const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState();
  const [eventData, setEventData] = useState();
  const { Id } = useParams();

  useEffect(() => {
    makeRequest(GET_EVENT_BY_ID(Id), {})
      .then((response) => {
        setEventData(response);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  return eventData ? (
    <div>
      <ShowEventDetails eventData={eventData} />
    </div>
  ) : (
    <div className="EventDataLoader">
      <p>Loading...</p>
    </div>
  );
}

export default CardDetails;
