import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface CtfData {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  link?: string;
  repo?: string;
  content: string;
}

const ctfDir = path.join(process.cwd(), "app", "content", "ctfs");

export async function getCtfSlugs(): Promise<string[]> {
  try {
    const files = await fs.promises.readdir(ctfDir);
    return files.filter(f => f.endsWith(".md")).map(f => f.replace(/\.md$/, ""));
  } catch (err) {
    console.error("Error reading ctf directory:", err);
    return [];
  }
}

export async function getCtfBySlug(slug: string): Promise<CtfData | null> {
  try {
    const fullPath = path.join(ctfDir, `${slug}.md`);
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...(data as Omit<CtfData, "slug" | "content">),
      content,
    };
  } catch (err) {
    console.error(`Error reading ctf: ${slug}`, err);
    return null;
  }
}

export async function getAllCtfs(): Promise<CtfData[]> {
  const slugs = await getCtfSlugs();
  const ctfs = await Promise.all(slugs.map(getCtfBySlug));
  return ctfs.filter((c): c is CtfData => c !== null);
}
