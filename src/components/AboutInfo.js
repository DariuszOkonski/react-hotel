import React from 'react';
import hotel2 from '../img/hotel1.jpg';

const AboutInfo = () => {
  return (
    <section className="about-info">
      <div className="about container">

        <div className="about__left">
          <h1 className="about__left--header">
            <span className="text-first">About</span> Hotel Royal
          </h1>
          <p className="about__left--paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium suscipit beatae dicta impedit ipsam consectetur adipisci autem, quam error nam dolorem sed, fugiat quod maxime laborum nihil dignissimos, assumenda aperiam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, adipisci! </p>
          <p className="about__left--paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nemo odio molestiae minus adipisci officiis eligendi ad. Fugit, ipsa voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores? </p>
        </div>

        <div className="about__right">
          <img src={hotel2} alt="" className="about__right--image" />
        </div>

      </div>
    </section>
  );
}

export default AboutInfo;