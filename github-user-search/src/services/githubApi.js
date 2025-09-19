export const searchUsers = async (query) => {
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const response = await fetch(
    `https://api.github.com/search/users?q=${query}`,
    {
      headers: {
        ...(apiKey && { Authorization: `token ${apiKey}` }),
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};
