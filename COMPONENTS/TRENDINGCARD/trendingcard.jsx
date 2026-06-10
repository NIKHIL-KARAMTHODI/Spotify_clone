import React from 'react';
import './trendingcard.css';
import { TrendingCardData } from '../config';

const TrendingCard = ({ setCurrentPage, setCurrentFile }) => {
  return (
    <div className="TrendingCardMainContainer">
      {TrendingCardData.map((ele, id) => (
        <div
          key={id}
          onClick={() => {
            setCurrentPage("musicSpecificPage");
            setCurrentFile(ele);
          }}
          className="CardContainer"
        >
          <img src={ele.imgSrc} alt={ele.heading} />
          <div className="CardTextContainer">
            <h2>{ele.heading}</h2>
            <p>{ele.subHeading}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCard
