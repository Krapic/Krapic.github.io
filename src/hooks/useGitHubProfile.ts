import { useQuery } from "@tanstack/react-query";

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  email: string | null;
  blog: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

const GITHUB_USERNAME = "Krapic";

const fetchGitHubProfile = async (): Promise<GitHubProfile> => {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`
  );
  
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }
  
  return response.json();
};

export const useGitHubProfile = () => {
  return useQuery({
    queryKey: ["github-profile", GITHUB_USERNAME],
    queryFn: fetchGitHubProfile,
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 2,
  });
};
