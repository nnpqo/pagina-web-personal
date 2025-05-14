import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface ProjectData {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
  link?: string; 
  repo?: string;
  content: string;
  documents?: { name: string; url: string }[];
}

const projectDir = path.join(process.cwd(), "app", "content", "proyectos");

export async function getProjectSlugs(): Promise<string[]> {
  try {
    const files = await fs.promises.readdir(projectDir);
    return files.filter(f => f.endsWith(".md")).map(f => f.replace(/\.md$/, ""));
  } catch (err) {
    console.error("Error reading project directory:", err);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  try {
    const fullPath = path.join(projectDir, `${slug}.md`);
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...(data as Omit<ProjectData, "slug" | "content">),
      content,
    };
  } catch (err) {
    console.error(`Error reading project: ${slug}`, err);
    return null;
  }
}

export async function getAllProjects(): Promise<ProjectData[]> {
  const slugs = await getProjectSlugs();
  const projects = await Promise.all(slugs.map(getProjectBySlug));
  return projects.filter((p): p is ProjectData => p !== null);
}
