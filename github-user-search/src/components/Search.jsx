import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [searchParams, setSearchParams] = useState({
    username: "",
    location: "",
    minRepos: "",
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if at least one field is filled
    if (
      !searchParams.username.trim() &&
      !searchParams.location.trim() &&
      !searchParams.minRepos.trim()
    ) {
      setError("Please enter at least one search criteria");
      return;
    }

    setLoading(true);
    setError(null);
    setUsers([]);
    setCurrentPage(1);

    try {
      const data = await searchUsers({
        ...searchParams,
        page: 1,
        perPage: 30,
      });

      setUsers(data.items);
      setTotalCount(data.total_count);
      setHasMore(data.items.length === 30 && data.total_count > 30);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const nextPage = currentPage + 1;

    try {
      const data = await searchUsers({
        ...searchParams,
        page: nextPage,
        perPage: 30,
      });

      setUsers((prev) => [...prev, ...data.items]);
      setCurrentPage(nextPage);
      setHasMore(
        data.items.length === 30 &&
          users.length + data.items.length < totalCount
      );
    } catch (err) {
      setError("Failed to load more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <div className="search-title">
        <h1>GitHub User Search</h1>
        <p>Find GitHub users by username, location, and repository count</p>
      </div>

      {/* Advanced Search Form */}
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={searchParams.username}
                onChange={handleInputChange}
                placeholder="Enter GitHub username"
                className="form-input"
                autoComplete="off"
                aria-label="GitHub username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                placeholder="e.g., San Francisco, CA"
                className="form-input"
                autoComplete="off"
                aria-label="Location"
              />
            </div>
            <div className="form-group">
              <label htmlFor="minRepos" className="form-label">
                Minimum Repositories
              </label>
              <input
                type="number"
                id="minRepos"
                name="minRepos"
                value={searchParams.minRepos}
                onChange={handleInputChange}
                placeholder="e.g., 10"
                min="0"
                className="form-input"
                autoComplete="off"
                aria-label="Minimum repositories"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                disabled={loading}
                className="search-button"
              >
                {loading ? (
                  <span>Searching...</span>
                ) : (
                  <span>Search Users</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Loading State */}
      {loading && users.length === 0 && (
        <div className="loading">Searching...</div>
      )}

      {/* Error State */}
      {error && <div className="error">{error}</div>}

      {/* Results */}
      {users.length > 0 && (
        <div className="results-container">
          <div className="results-header">
            <div className="results-count">
              Found {totalCount.toLocaleString()} users
            </div>
            <div className="pagination-info">
              Showing {users.length} of {totalCount.toLocaleString()} results
            </div>
          </div>
          <div className="users-grid">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <div className="user-header">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="user-avatar"
                  />
                  <div className="user-info">
                    <h3>{user.name || user.login}</h3>
                    <p className="user-login">@{user.login}</p>
                  </div>
                </div>
                <div className="user-details">
                  {user.bio && (
                    <div className="user-detail">
                      <span className="user-detail-icon">📝</span>
                      <span>{user.bio}</span>
                    </div>
                  )}
                  {user.location && (
                    <div className="user-detail">
                      <span className="user-detail-icon">📍</span>
                      <span>{user.location}</span>
                    </div>
                  )}
                  <div className="user-detail">
                    <span className="user-detail-icon">📚</span>
                    <span>{user.public_repos} repositories</span>
                  </div>
                  <div className="user-detail">
                    <span className="user-detail-icon">👥</span>
                    <span>{user.followers} followers</span>
                  </div>
                </div>
                <div className="user-actions">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
          {hasMore && (
            <button
              onClick={loadMore}
              disabled={loading}
              className="load-more-button"
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      )}

      {/* No Results */}
      {!loading &&
        users.length === 0 &&
        totalCount === 0 &&
        searchParams.username && (
          <div className="loading">No users found matching your criteria.</div>
        )}
    </div>
  );
}

export default Search;
