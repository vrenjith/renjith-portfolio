
export interface LinkedinPost {
  id: string;
  embedUrl: string;
  title: string;
  date: string;
}

export const linkedinPosts: LinkedinPost[] = [
  {
    id: "devops-evolution",
        embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7393212058479022080",
        title: "The Real Heroes Were the People: Our RAG System Meets Onyx",
    date: "2025-11-09",
  },
  
  // I cannot directly access real LinkedIn posts due to authentication requirements.
  // Here's how you can find and add relevant LinkedIn posts:
  
  // STEP 1: Search for posts on these topics:
  // - Search LinkedIn for: "DevOps automation" + recent posts
  // - Search LinkedIn for: "Jenkins CI/CD pipeline" + recent posts  
  // - Search LinkedIn for: "RAG implementation" + recent posts
  // - Search LinkedIn for: "LLM enterprise" + recent posts
  // - Search LinkedIn for: "Kubernetes deployment" + recent posts
  
  // STEP 2: Look for posts from these types of accounts:
  // - DevOps engineers and architects
  // - Platform engineering leaders
  // - AI/ML practitioners in enterprise
  // - Jenkins and CI/CD experts
  // - Cloud architecture specialists
  
  // STEP 3: For each good post you find:
  // 1. Click the three dots menu on the post
  // 2. Select "Embed this post" 
  // 3. Copy the embed URL
  // 4. Add it below using this format:
  
  // {
  //   id: "unique-post-id",
  //   embedUrl: "PASTE_REAL_EMBED_URL_HERE",
  //   title: "Post Title from LinkedIn",
  //   date: "YYYY-MM-DD",
  // },
];
