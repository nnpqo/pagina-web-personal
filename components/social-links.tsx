import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import TiktokIcon from '../app/Iconos/TiktokIcon';

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        asChild
        variant="outline"
        size="icon"
        className="rounded-full border-cyber-200 dark:border-cyber-800 hover:bg-cyber-100 dark:hover:bg-cyber-900/30"
      >
        <Link href="https://github.com/nnpqo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="h-5 w-5" />
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="icon"
        className="rounded-full border-cyber-200 dark:border-cyber-800 hover:bg-cyber-100 dark:hover:bg-cyber-900/30"
      >
        <Link href="https://linkedin.com/in/yaninapaola" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="icon"
        className="rounded-full border-cyber-200 dark:border-cyber-800 hover:bg-cyber-100 dark:hover:bg-cyber-900/30"
      >
        <Link href="https://instagram.com/techbynina/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="icon"
        className="rounded-full border-cyber-200 dark:border-cyber-800 hover:bg-cyber-100 dark:hover:bg-cyber-900/30"
      >
        <Link href="https://www.tiktok.com/@tech.by.nina?_t=ZM-8wId8bHPtSv&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <TiktokIcon className="h-7 w-7 text-pink-500" />
        </Link>
      </Button>
    </div>
  )
}
