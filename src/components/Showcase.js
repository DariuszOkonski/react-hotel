import React from 'react';
import { Link } from 'react-router-dom';

const Showcase = () => {
  return (
    <section className="showcase py-2">
      <div className="container">
        <h1 className="showcase__header">
          <span className="text-first">Enjoy</span> Your Stay
        </h1>

        <p className="showcase__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi assumenda accusantium rerum, maxime, aperiam ipsam inventore repellat minima suscipit vel explicabo voluptas quis! Eos, illo dolor autem quas accusantium, vel esse ullam, possimus est corrupti quae voluptatibus cum neque libero.
      </p>

        <Link to='/about' className="btn btn-dark">About Our Hotel</Link>
      </div>
    </section>
  );
}

export default Showcase;