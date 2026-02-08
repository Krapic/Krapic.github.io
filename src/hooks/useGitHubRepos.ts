import { useQuery } from "@tanstack/react-query";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

const GITHUB_USERNAME = "Krapic";

const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
  );
  
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }
  
  return response.json();
};

export const useGitHubRepos = () => {
  return useQuery({
    queryKey: ["github-repos", GITHUB_USERNAME],
    queryFn: fetchGitHubRepos,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
};
