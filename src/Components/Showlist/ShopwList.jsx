import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShowList.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Remove HTML tags from the summary
  const removeTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <div className="show-list-container">
      <h2>Show List</h2>
      {
        shows.map(show => (
          <div key={show.show.id} className="show-card">
            <h3 className="show-title">{show.show.name}</h3>
            <img className="show-image" src={show.show.image?.medium} alt={show.show.name} />
            <p className="show-summary">{removeTags(show.show.summary)}</p>
            <Link to={`/shows/${show.show.id}`} className="view-details">View Details</Link>
          </div>
        ))
      }
    </div>
  );
};

export default ShowList;
