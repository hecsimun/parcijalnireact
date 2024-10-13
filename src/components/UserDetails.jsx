import React from "react";
import PropTypes from "prop-types";

const UserDetails = ({ user, repos, onReset }) => {
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} style={{ width: "100px" }} />
      <h2>{user.name || user.login}</h2>
      <p>Location: {user.location || "Not specified"}</p>
      <p>Bio: {user.bio || "No bio available"}</p>
      <h3>Repositories:</h3>
      <div className="repo-list">
        <ul>
          {repos.length > 0 ? (
            repos.map((repo) => <li key={repo.id}>{repo.name}</li>)
          ) : (
            <li>No repositories available.</li>
          )}
        </ul>
      </div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
