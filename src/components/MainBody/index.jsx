/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest/index';
import { GET_ALL_EVENTS } from '../../constants/apiEndPoints';
import AllEvents from '../AllEvents';
import './MainBody.css';

function MainBody() {
  const [allEventsData, setAllEventsData] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(GET_ALL_EVENTS(), {}, navigate)
      .then((response) => {
        setAllEventsData(response);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);
  return allEventsData ? (
    <div className="main-body">
      <div className="main-body-container">
        <div className="filter-section">filter</div>
        <div className="card-space">
          <AllEvents allEventsData={allEventsData} />
        </div>
      </div>
    </div>
  ) : (
    <div className="EventDataLoader">
      <p>Loading...</p>
    </div>
  );
}

export default MainBody;
