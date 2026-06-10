import React from 'react';
import './trending.css';
import TrendingCard from '../TRENDINGCARD/trendingcard';

const Trending = ({ setCurrentPage, setCurrentFile }) => {
  return (
    <div className="TrendingSectionMainContainer">
      <span>
        <h1>Trending Songs</h1>
      </span>
      <TrendingCard 
        setCurrentPage={setCurrentPage} 
        setCurrentFile={setCurrentFile} 
      />
    </div>
  );
};

export default Trending
