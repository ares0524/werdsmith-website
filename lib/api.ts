const API_BASE_URL = (process.env.API_BASE_URL || 'http://localhost:4000').replace(/\/$/, '');

export interface PortfolioUser {
  display_name: string;
  photo_url: string | null;
  bio: string | null;
  username: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  type: 'poem' | 'story' | 'script';
  word_count_goal: number;
  cover_image_url: string | null;
  published: boolean;
  content_locked: boolean;
  created_at: number;
  updated_at: number;
}

export interface PortfolioDocument {
  id: string;
  project_id: string;
  title: string;
  content: string;
  word_count: number;
  character_count: number;
  category: string | null;
  created_at: number;
  updated_at: number;
}

export interface PortfolioResponse {
  user: PortfolioUser;
  projects: PortfolioProject[];
}

export interface PortfolioProjectResponse {
  project: PortfolioProject;
  documents: PortfolioDocument[];
  /** True when the author locked the project's contents — it's listed, but its pages are private. */
  locked?: boolean;
}

/** Fetches a user's public portfolio. Returns null if the username doesn't exist (404). */
export async function getPortfolio(username: string): Promise<PortfolioResponse | null> {
  const res = await fetch(`${API_BASE_URL}/portfolio/${encodeURIComponent(username)}`, { cache: 'no-store' });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load portfolio for ${username}: ${res.status}`);
  return res.json();
}

/** Fetches one published project (with its documents) from a user's portfolio. Null if missing/unpublished. */
export async function getPortfolioProject(
  username: string,
  projectId: string,
): Promise<PortfolioProjectResponse | null> {
  const res = await fetch(
    `${API_BASE_URL}/portfolio/${encodeURIComponent(username)}/${encodeURIComponent(projectId)}`,
    { cache: 'no-store' },
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load project ${projectId}: ${res.status}`);
  return res.json();
}
