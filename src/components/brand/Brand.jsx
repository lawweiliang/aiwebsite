import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google.png" />
      </div>
      <div>
        <img src={slack} alt="slack.png" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian.png" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox.png" />
      </div>
      <div>
        <img src={shopify} alt="shopify.png" />
      </div>
    </div>
  );
};

export default Brand;
