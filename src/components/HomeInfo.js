import React from 'react';
import { Link } from 'react-router-dom';
import hotel2 from '../img/hotel2.jpg';

const HomeInfo = () => {
  return (
    <section className="home-info">
      <div className="info-left">
        <img className="info-left__img" src={hotel2} alt="hotel-outside" />
      </div>

      <div className="info-right">
        <h2 className="info-right__header">
          <span className="text-first">The History</span> Of Our Hotel
        </h2>
        <p className="info-right__paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure expedita doloribus dicta quam modi rem minus quod. Eligendi quia cum quos velit quas. Consequatur adipisci, architecto cumque molestias officia nulla!
        </p>

        <Link to='/about' className="btn btn-light">Read More</Link>
      </div>
    </section>
  );
}

export default HomeInfo;