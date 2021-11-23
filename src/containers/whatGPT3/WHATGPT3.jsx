import React from 'react';
import Feature from '../../components/feature/Feature';
import './WHATGPT3.css';

const WHATGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3__top">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3__middle"></div>
      <div className="gpt3__whatgpt3__bottom">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default WHATGPT3;
