import React from 'react';

const Features = () => {
  return (
    <section className="features">

      <div className="box">
        <i className="fa fa-building box__icon" aria-hidden="true"></i>
        <h4 className="box__header">Great Location</h4>
        <p className="box__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo veritatis amet illum ab culpa pariatur nemo eum maiores ullam veniam?</p>
      </div>

      <div className="box">
        <i className="fa fa-cutlery box__icon" aria-hidden="true"></i>
        <h4 className="box__header">Free Meals</h4>
        <p className="box__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo veritatis amet illum ab culpa pariatur nemo eum maiores ullam veniam?</p>
      </div>

      <div className="box">
        <i className="fa fa-bicycle box__icon" aria-hidden="true"></i>
        <h4 className="box__header">Fitness Room</h4>
        <p className="box__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo veritatis amet illum ab culpa pariatur nemo eum maiores ullam veniam?</p>
      </div>


    </section>
  );
}

export default Features;