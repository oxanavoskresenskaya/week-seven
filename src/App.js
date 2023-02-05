import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [quote, setQuote] = useState("");
  /*const getQuote = useCallback( async() => {
    const responce = await fetch ('https://api.quotable.io/random');
    const data = await responce.json();
    setQuote(data.content);
  })
  useEffect (()=> {
    getQuote() 
  }, [getQuote])*/
  useEffect (() =>{
    const getQuote = async () => {
      const responce = await fetch ('https://api.quotable.io/random')
      const data = await responce.json()
      console.log(data);
      setQuote(data)
    }
  })
  return (
    <div className="App">
      <p>{quote}</p>
    </div>
  );
}

export default App;
