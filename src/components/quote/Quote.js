import React, { useState, useEffect } from 'react';
import Buttons from '../buttons/Buttons';
import axios from 'axios';

const Quote = () => {
  const [quotes, setQuotes] = useState('');

  useEffect(() => {
    axios
      .get('https://geek-jokes.sameerkumar.website/api?format=json')
      .then((res) => {
        setQuotes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getNewQuote = () => {
    axios
      .get('https://geek-jokes.sameerkumar.website/api?format=json')
      .then((res) => {
        setQuotes(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='quote-text'>
      <i className='fas fa-quote-left' />
      <span id='quote'> {quotes.joke}</span>
      <Buttons quotes={quotes} getNewQuote={getNewQuote} />
    </div>
  );
};

export default Quote;
