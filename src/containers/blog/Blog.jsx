import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const articles = [
  {
    imageUrl: blog01,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    imageUrl: blog02,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    imageUrl: blog03,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    imageUrl: blog04,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    imageUrl: blog05,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening,</h1>
        <h1 className="gradient__text">We are blogging about it.</h1>
      </div>
      <div class="gpt3__blog-container">
        <div class="gpt3__blog-container__groupA">
          <Article imgUrl={articles[0].imageUrl} date={articles[0].date} title={articles[0].title} />
        </div>
        <div class="gpt3__blog-container__groupB">
          <Article imgUrl={articles[1].imageUrl} date={articles[1].date} title={articles[1].title} />
          <Article imgUrl={articles[2].imageUrl} date={articles[2].date} title={articles[2].title} />
          <Article imgUrl={articles[3].imageUrl} date={articles[3].date} title={articles[3].title} />
          <Article imgUrl={articles[4].imageUrl} date={articles[4].date} title={articles[4].title} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
