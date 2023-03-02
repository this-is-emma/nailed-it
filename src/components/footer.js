import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Inscrivez vous a notre Newsletter pour beneficier 
          d'un <strong className='rabais'>rabais de 10%</strong> lors de votre prochaine visite
        </p>
        <p className="footer-subscription-text">Entrez votre email ici:</p>
        <div className="input-area">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="footer-input"
            />
            <input
              type="submit"
              value="Je m'inscris"
              className="footer-submit"
            />
          </form>
        </div>
      </section>
      <section className="footer-credits">
        <p>Emmanuel Designs | Homepage background image from <a className='unsplash-link' href='https://unsplash.com/fr/photos/VxAwTeiqDao'>unsplash</a> | All other images property of Edith Sakatia</p> 
      </section>
    </div>
  );
}

export default footer;
