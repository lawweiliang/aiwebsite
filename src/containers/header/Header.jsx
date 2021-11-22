import React from 'react';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';
import './header.css';

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3_header-content">
        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration
          boisterous the attachment. Party we years to order allow asked of.
        </p>

        <div className="gpt3__header-content__input">
          <input type="text" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>

        <div className="gpt3__header-content__people"></div>
      </div>
      <div className="gpt3__header-content__image">
        <img src={ai} alt="ai.png" />
      </div>
    </div>
  );
}

export default Header;
