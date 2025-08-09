export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  publishedDate: string;
  categories: string[];
  readTime: string;
}

export class BloggerService {
  private static BLOG_RSS_URL = 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://random-revelations.blogspot.com/feeds/posts/default?alt=rss');

  static async fetchBlogPosts(): Promise<BlogPost[]> {
    try {
      const response = await fetch(this.BLOG_RSS_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
      }
      
      const xmlText = await response.text();
      
      return this.parseRSSFeed(xmlText);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  }

  private static parseRSSFeed(xmlText: string): BlogPost[] {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    const items = xmlDoc.querySelectorAll('item');
    
    return Array.from(items).map((item, index) => {
      const title = this.getTextContent(item, 'title') || 'Untitled';
      const description = this.getTextContent(item, 'description') || '';
      const url = this.getTextContent(item, 'link') || '';
      const pubDate = this.getTextContent(item, 'pubDate') || '';
      const guid = this.getTextContent(item, 'guid') || `post-${index}`;
      
      // Extract categories
      const categoryElements = item.querySelectorAll('category');
      const categories = Array.from(categoryElements).map(cat => cat.textContent || '').filter(Boolean);
      
      // Clean up description and extract content
      const cleanDescription = this.stripHtml(description);
      const content = this.extractContent(description);
      
      // Calculate read time (roughly 200 words per minute)
      const wordCount = cleanDescription.split(/\s+/).length;
      const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
      
      return {
        id: this.extractIdFromGuid(guid),
        title,
        description: cleanDescription.slice(0, 200) + (cleanDescription.length > 200 ? '...' : ''),
        content,
        url,
        publishedDate: this.formatDate(pubDate),
        categories,
        readTime,
      };
    });
  }

  private static getTextContent(element: Element, tagName: string): string | null {
    const child = element.querySelector(tagName);
    return child ? child.textContent : null;
  }

  private static stripHtml(html: string): string {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }

  private static extractContent(html: string): string {
    // Remove HTML tags but preserve basic structure
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private static extractIdFromGuid(guid: string): string {
    const match = guid.match(/post-(\d+)$/);
    return match ? match[1] : guid.split('.').pop() || guid;
  }

  private static formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  }
}