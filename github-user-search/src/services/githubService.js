import axios from "axios";

export const fetchUserData = async (username) => {
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          ...(apiKey && { Authorization: `token ${apiKey}` }),
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};

export const searchUsers = async (searchParams) => {
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

  // Build query string from search parameters
  let query = "";

  if (searchParams.username) {
    query += searchParams.username;
  }

  if (searchParams.location) {
    query += ` location:${searchParams.location}`;
  }

  if (searchParams.minRepos) {
    query += ` repos:>=${searchParams.minRepos}`;
  }

  // If no query parameters provided, return empty results
  if (!query.trim()) {
    return { items: [], total_count: 0 };
  }

  try {
    const response = await axios.get(`https://api.github.com/search/users`, {
      params: {
        q: query.trim(),
        per_page: searchParams.perPage || 30,
        page: searchParams.page || 1,
      },
      headers: {
        ...(apiKey && { Authorization: `token ${apiKey}` }),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to search users");
  }
};
