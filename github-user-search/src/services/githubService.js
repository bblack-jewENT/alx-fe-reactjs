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
