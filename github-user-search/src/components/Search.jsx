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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          GitHub User Search
        </h1>
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
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {/* Results */}
      {users.length > 0 && (
        <div>
          <div className="mb-4">
            <p className="text-gray-600">
              Found {totalCount.toLocaleString()} users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {user.name || user.login}
                    </h3>
                    <p className="text-gray-600">@{user.login}</p>
                  </div>
                </div>

                {user.bio && (
                  <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                    {user.bio}
                  </p>
                )}

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  {user.location && (
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {user.location}
                    </div>
                  )}

                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {user.public_repos} repositories
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    {user.followers} followers
                  </div>
                </div>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  View Profile
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-6 py-3 bg-gray-600 text-white font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* No Results */}
      {!loading &&
        users.length === 0 &&
        totalCount === 0 &&
        searchParams.username && (
          <div className="text-center py-8">
            <p className="text-gray-600">
              No users found matching your criteria.
            </p>
          </div>
        )}
    </div>
  );
}

export default Search;
