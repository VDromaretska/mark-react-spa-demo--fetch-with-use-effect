import { useEffect, useState } from "react";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

function App() {
  const [joke, setJoke] = useState<Joke>();

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(
        "https://jokestemp.neillbogie.repl.co/jokes/general/ranom"
      );
      const jsonBody: Joke[] = await response.json();
      setJoke(jsonBody[0]);
      console.log(jsonBody[0])
    };

    fetchJoke();

  }, []);

  // useEffect(() => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // }, [])

  return (
    <>
      <h1>Joke app</h1>
      {joke && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{joke.setup}</b>
          </p>
          <p>
            <i>{joke.punchline}</i>
          </p>
        </>
      )}
    </>
  );
}

interface Quote {
  id: string;
  content: string;
  author: string;
}

function App2 () {
const [quote, setQuote] = useState<Quote>();

useEffect (() => {
  async function fetchQuote() {
  const response = await fetch("https://api.quotable.io/random");
const jsonContent : Quote = await response.json();
setQuote(jsonContent)

  };
  fetchQuote();
},[])

return (
  <div>
    {(quote)&&( <>
      <h1>Welcome!</h1>
      <p>{quote.content}</p>
      <p>{quote.author}</p>
    </>)}
  </div>
)
}
export default App2;
