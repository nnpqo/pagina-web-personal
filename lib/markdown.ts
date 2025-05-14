import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogData {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  authorName: string;
  authorImage: string;
  category: string;
  tags: string[];
  relatedPosts?: string[];
  content: string;
}

const blogDir: string = path.join(process.cwd(), "app", "content", "blog");


export async function getBlogSlugs(): Promise<string[]> {
  try {
    const files: string[] = await fs.promises.readdir(blogDir);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));
  } catch (err) {
    console.error("Error reading blog directory:", err);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogData | null> {
  try {
    const fullPath: string = path.join(blogDir, `${slug}.md`);
    const fileContents: string = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...(data as Omit<BlogData, "slug" | "content">),
      content,
    };
  } catch (err) {
    console.error(`Error reading blog file for slug: ${slug}`, err);
    return null;
  }
}

export async function getAllBlogs(): Promise<BlogData[]> {
  const slugs: string[] = await getBlogSlugs();
  const blogs: (BlogData | null)[] = await Promise.all(slugs.map(getBlogBySlug));
  return blogs.filter((b): b is BlogData => b !== null);
}
