// src/App.jsx
import './App.css';

const App = () => {
  const items = [
    { name: 'harry potter', watched: true },
    { name: 'dune', watched: false },
    { name: 'spider man', watched: true },
  ];

  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.watched ? 'watched' : 'not-watched'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;