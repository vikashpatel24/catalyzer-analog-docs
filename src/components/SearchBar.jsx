import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const performSearch = async () => {
    const res = await fetch('http://localhost:4000/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token', // Replace with real auth
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setResults(data.hits || []);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search docs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && performSearch()}
      />
      <ul>
        {results.map(hit => (
          <li key={hit.objectID}>
            <strong>{hit.title}</strong>
            <p>{hit.content.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
