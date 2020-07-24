import React from 'react';

const Buttons = ({ quotes, getNewQuote }) => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.joke}`;

  return (
    <div className='button-container'>
      <button
        onClick={() => window.open(twitterUrl, '_blank')}
        className='twitter-button'
        id='twitter'
        tittle='Tweet This!'
      >
        <i className='fab fa-twitter' />
      </button>
      <button id='new-quote' onClick={getNewQuote}>
        New Quote
      </button>
    </div>
  );
};

export default Buttons;
