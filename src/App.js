import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from  './Components/Showlist/ShopwList';
import ShowDetails from './Components/Showdetails/ShowDetails';
import BookingForm from './Components/BookingForm/BookingForm';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/shows/:showId" element={<ShowDetails />} />
          <Route exact path="/booking" element={<BookingForm/>} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
