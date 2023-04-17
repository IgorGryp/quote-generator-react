import { useState, useEffect } from "react";

function App() {
  function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <div className="App">
      <section className="quote-section">
        {/* <h1>Quote Generator</h1> */}

        <div className="quote-div">
          <div className="quote">
            <h3>“{quote?.text}“</h3>
            <p className="author">- {quote?.author} -</p>
          </div>
          <button onClick={getNewQuote}>Next Quote</button>
        </div>
      </section>
    </div>
  );
}

export default App;
