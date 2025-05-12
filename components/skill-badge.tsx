interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="rounded-full bg-cyber-100 dark:bg-cyber-900/30 px-3 py-1 text-sm font-medium text-cyber-700 dark:text-cyber-300 hover:bg-cyber-200 dark:hover:bg-cyber-800/50 transition-colors">
      {name}
    </div>
  )
}
