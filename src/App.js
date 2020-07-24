import React from 'react';
import './App.css';

//Components
import Title from './components/title/Title';
import Quote from './components/quote/Quote';
import Author from './components/author/Author';

function App() {
  return (
    <div>
      <Title />
      <div className='quote-container' id='quote_container'>
        {/* Quote */}
        <Quote />
        {/* Author Currently not used */}
        <Author />
        <footer>
          Made with{' '}
          <span aria-label='Heart' role='img'>
            ❤️
          </span>{' '}
          by Carl Padilla
        </footer>
      </div>
    </div>
  );
}

export default App;
