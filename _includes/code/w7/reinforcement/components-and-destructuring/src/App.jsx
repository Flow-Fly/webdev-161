import './App.css';

import { useState } from 'react';
import Message from './components/Message';

const students = [
  { name: "Thomas", last: "Demathieu", favNumber: "232" },
  { name: "Tom", last: "Mahe", favNumber: "8563" },
  { name: "Fabien", last: "Gentil", favNumber: "24546" },

];


function App() {
  // const state = useState("Hi");
  // const greeting = state[0];
  // const setGreeting = state[1];

  // const [farewell, setFarewell] = useState("");

  const [messages, setMessages] = useState({
    greeting: "Hi",
    farewell: "Bye"
  });

  function handleChange(event) {
    const key = event.target.name;
    console.log(key);

    setMessages({
      ...messages,
      [key]: event.target.value
    });
  }

  console.log(messages);
  return (
    <div className="App">
      <Message msg={{ name: { first: "loop" } }} />

      <ul>
        {students.map((student, i) => {
          // in the absence of an id, we can use a combination of other fields as key. never use the index as key
          return <li key={student.name + student.last + student.favNumber}>
            <p>{student.name}</p>
          </li>;
        })}
      </ul>

      <h2>{messages.greeting}</h2>
      <h2>{messages.farewell}</h2>
      <form>
        <input type="text" name='greeting' value={messages.greeting} onChange={handleChange} />
        <input type="text" name='farewell' value={messages.farewell} onChange={handleChange} />
      </form>
    </div>
  );
}

export default App;
