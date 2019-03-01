import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import constImg from '../assets/piggybank.png'
import accountImg from '../assets/pexels-photo-1043506.jpeg'

export default class Home extends Component {
  render() {
    return (
        <div className="home">
          <Helmet>
            <title>Home | Cullen, Murphy & Co., PC.</title>
          </Helmet>
          <div className="home-section home-hero">
            <div className="home-hero-text">
              Small firm attention,
              <br/>big firm results.
            </div>
          </div>
          <div className="home-section">
            <div className="home-description home-description-alt">
              <div className="home-description-img home-section-double">
                  <img src={constImg} alt=""/>
              </div>
              <div className= "home-description-text home-section-double">
                <strong>Cullen Murphy & Co., P.C.</strong>  provides diversified tax and accounting services to our clients located in Greater Boston, and throughout New England.  The firm’s history of stability, focus and depth stems from the firm’s distinctive professional expertise assisting closely-held companies with their tax and financial requirements.
              </div>
            </div>
            <br/><br/>
            <div className="home-description">
              <div className= "home-description-text home-section-double">
                  Throughout this website you will find information about our firm, introduce you to our team of professionals and the services we provide. We encourage you to contact us with any questions you may have about our firm.
              </div>
              <div className="home-description-img home-section-double">
                  <img src={accountImg} alt=""/>
              </div>
            </div>
          </div>



        </div>
    );
  }
}
