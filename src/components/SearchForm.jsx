import React from "react";

function SearchForm({ username, setUsername, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onSearch(username);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Unesi GitHub ime korisnika"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
