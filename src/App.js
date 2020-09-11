import React, { useState } from 'react';
import Quote from './components/Quote'
import './App.css';
import quotes from "./data/quotes"


function App() {

  const [quote, setQuote] = useState(Math.floor(Math.random() * quotes.data.length));
  const [tweetLink, setTweetLink] = useState("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=");
  let quoteText = quotes.data[quote].text;
  let quoteAuthor = quotes.data[quote].author;
  const tweetStart = "https://twitter.com/intent/tweet?hashtags=quotes&text=";

  const generateQuote = (e) => {
    e.preventDefault();
    setQuote(Math.floor(Math.random() * quotes.data.length));
  }

  const generateTweetLink = () => {
    setTweetLink(`${tweetStart}"${quoteText}" ~${quoteAuthor}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>

        <div id="quote-box">

          <Quote text={quoteText} author={quoteAuthor} />
          <div id="button-row">

            <a onMouseOver={generateTweetLink} href={tweetLink} id="tweet-quote" target="_blank" rel="noopener noreferrer" title="Tweet This Quote!">
              <i class="fab fa-twitter-square fa-2x"></i>
            </a>
            <button onClick={generateQuote} id="new-quote">Generate Quote</button>

          </div>
        </div>
      </header>
    </div >
  );
}

export default App;
