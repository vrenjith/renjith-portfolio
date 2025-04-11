
export interface LinkedinPost {
  id: string;
  embedUrl: string;
  title: string;
  date: string;
}

export const linkedinPosts: LinkedinPost[] = [
  {
    id: "post1",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7316300868432142336",
    title: "My Thoughts on DevOps Architecture",
    date: "2024-03-15",
  },
  // Add more LinkedIn posts here
];
