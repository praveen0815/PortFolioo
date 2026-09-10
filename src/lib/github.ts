export type GithubProfile = {
  publicRepos: number;
};

export async function getGithubProfile(): Promise<GithubProfile | null> {
  try {
    const response = await fetch("https://api.github.com/users/praveen0815", {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const data: unknown = await response.json();
    if (
      typeof data !== "object" ||
      data === null ||
      !("public_repos" in data) ||
      typeof data.public_repos !== "number"
    ) {
      return null;
    }

    return { publicRepos: data.public_repos };
  } catch {
    return null;
  }
}
