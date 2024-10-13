import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import UserDetails from "./components/UserDetails";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!username) {
      setError("Please enter a GitHub username.");
      return;
    }

    setError("");
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);

      if (userResponse.status === 404) {
        setError("User not found.");
        setUser(null);
        setRepos([]);
        return;
      }

      setUser(userResponse.data);

      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepos(reposResponse.data);
    } catch (error) {
      setError("There was an error fetching data. Please try again.");
      setUser(null);
      setRepos([]);
    }
  };

  const handleReset = () => {
    setUsername("");
    setUser(null);
    setRepos([]);
    setError("");
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>

      {/* Forma za pretragu */}
      <SearchForm username={username} setUsername={setUsername} onSearch={handleSearch} />

      {/* Ako postoji greška, prikazujemo je */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Prikazujemo podatke o korisniku ako je uspješno dohvaćen */}
      {user && <UserDetails user={user} repos={repos} onReset={handleReset} />}
    </div>
  );
}

export default App;
