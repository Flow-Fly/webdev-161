import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [characters, setcharacters] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);

  async function fetchChars() {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);

    // fetch returns a promise to a raw response, so we need to parse it
    const { results } = await response.json();

    console.log("fetching", pageNumber);
    setcharacters(results);
  }

  // by adding pageNumber as a dependency, we fetch every time the pageNumber state is updated. be carefull not to have state you're updating in the useEffect as a dependency. feel free to modify and test this
  useEffect(() => {
    fetchChars();
  }, [pageNumber]);



  return (
    <div className="App" >
      <button onClick={(e) => setpageNumber(pageNumber + 1)}>
        Fetch next page
      </button>

      <h1>Page {pageNumber}</h1>

      {characters.map(char => {
        const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

        return <p style={{ color: randomColor }} key={char.id}>{char.name}</p>;
      })}
    </div>
  );
}

export default App;
