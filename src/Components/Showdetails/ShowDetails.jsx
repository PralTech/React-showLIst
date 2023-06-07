import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './ShowDetails.css';

const ShowDetails = () => {
  const [show, setShow] = useState(null);
  const { showId } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [showId]);

  if (!show) {
    return <div>Loading...Please wait...</div>;
  }

  const removeTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <div className="show-details-container">
      <h2>Show Details</h2>
      <h3 className="show-title">{show.name}</h3>
      <p className="show-summary">{removeTags(show.summary)}</p>
      <Link to={`/booking?movie=${encodeURIComponent(show.name)}`} className="booking-button">
        Book Tickets
      </Link>
    </div>
  );
};

export default ShowDetails;
