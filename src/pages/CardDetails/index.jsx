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

function CardDetails() {
  const [isBookmark, setIsBookmark] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState();
  const [eventData, setEventData] = useState();
  const { Id } = useParams();

  useEffect(() => {
    console.log(Id);
    makeRequest(GET_EVENT_BY_ID(Id))
      .then((response) => {
        setEventData(response);
      })
      .catch((e) => {
        setError(e.message);
      });
    setIsBookmark(eventData.isBookmarked);
    setIsRegistered(eventData.isRegistered);
  }, []);

  const onClickHandler = () => {
    if (isBookmark) {
      makeRequest(UPDATE_BOOKMARK(eventData.id), {
        data: { isBookmarked: false },
      });
      setIsBookmark(!isBookmark);
    } else {
      makeRequest(UPDATE_BOOKMARK(eventData.id), {
        data: { isBookmarked: true },
      });
      setIsBookmark(!isBookmark);
    }
  };
  return (
    <div>
      <Link to={`/${eventData.id}`}>
        <div className="card">
          <div className="card-img">
            <img src={eventData.imgUrl} alt="" />
          </div>
          <div className="event-name">
            <h3>{eventData.name}</h3>
          </div>
          <div className="card-description">
            <h5>{eventData.description}</h5>
          </div>
          <div className="card-venue">
            <h5>VENUE :</h5>
            <h5>{eventData.venue}</h5>
          </div>
          <div className="card-date">
            <h5>Date :</h5>

            <h5>{getFormattedDateFromUtcDate(eventData.datetime)}</h5>
          </div>

          <div className="card-bottom">
            <div className="registration-status">
              {!eventData.areSeatsAvailable && <h3>No Seats Available</h3>}
            </div>
            <div className="bookmark-status">
              {isBookmark ? (
                <button type="button" onClick={onClickHandler}>
                  Bookmarked
                </button>
              ) : (
                <button type="button" onClick={onClickHandler}>
                  Not Bookmarked
                </button>
              )}
              {/* <FontAwesomeIcon icon="fa-regular fa-bookmark" /> */}
              {/* <i className="fa-solid fa-user" /> */}
              {/* <img className="bookmark-icon" src={Bookmark} alt="" />{' '} */}
              {/* {eventData.isBookmarked} */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardDetails;
