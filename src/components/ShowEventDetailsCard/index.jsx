/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_BOOKMARK } from '../../constants/apiEndPoints';

import './ShowEventDetailsCard.css';
// import SyncButton from '../../components/SyncButton';

function ShowEventDetailsCard({ eventData }) {
  const [isBookmark, setIsBookmark] = useState(eventData.isBookmarked);
  const [isRegistered, setIsRegistered] = useState(eventData.isRegistered);

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
    <div className="ShowEventDetailsCard">
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
    </div>
  );
}

export default ShowEventDetailsCard;
