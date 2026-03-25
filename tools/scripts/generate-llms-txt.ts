import * as fs from 'node:fs'
import * as path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '../../')

interface IDocEntry {
  readonly title: string
  readonly path: string
  readonly description: string
}

function findClaudeMdFiles(): readonly IDocEntry[] {
  const entries: IDocEntry[] = []
  const dirs = ['apps', 'packages']

  for (const dir of dirs) {
    const fullDir = path.join(ROOT, dir)
    if (!fs.existsSync(fullDir)) continue

    for (const entry of fs.readdirSync(fullDir)) {
      const claudeMd = path.join(fullDir, entry, 'CLAUDE.md')
      if (fs.existsSync(claudeMd)) {
        const content = fs.readFileSync(claudeMd, 'utf-8')
        const titleMatch = content.match(/^#\s+(.+)$/m)
        const title = titleMatch ? titleMatch[1] : entry

        entries.push({
          title,
          path: `${dir}/${entry}/CLAUDE.md`,
          description: `AI context for ${dir}/${entry}`,
        })
      }
    }
  }

  return entries
}

function findDocFiles(): readonly IDocEntry[] {
  const entries: IDocEntry[] = []
  const docsDir = path.join(ROOT, 'docs')

  if (!fs.existsSync(docsDir)) return entries

  function walk(dir: string, prefix: string): void {
    for (const entry of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, entry)
      const relativePath = `${prefix}/${entry}`

      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath, relativePath)
      } else if (entry.endsWith('.md')) {
        const content = fs.readFileSync(fullPath, 'utf-8')
        const titleMatch = content.match(/^#\s+(.+)$/m)
        const title = titleMatch ? titleMatch[1] : entry.replace('.md', '')

        entries.push({
          title,
          path: relativePath.replace(/^\//, ''),
          description: title,
        })
      }
    }
  }

  walk(docsDir, 'docs')
  return entries
}

function generate(): string {
  const claudeMdFiles = findClaudeMdFiles()
  const docFiles = findDocFiles()

  const lines: string[] = [
    '# AI-First Template',
    '',
    '> NX monorepo template with Clean Architecture, DDD, and AI-first principles.',
    '',
    '## Package Documentation (CLAUDE.md files)',
    '',
  ]

  for (const entry of claudeMdFiles) {
    lines.push(`- [${entry.title}](${entry.path}): ${entry.description}`)
  }

  lines.push('', '## Architecture & Guides', '')

  for (const entry of docFiles) {
    lines.push(`- [${entry.title}](${entry.path}): ${entry.description}`)
  }

  lines.push('', '## Specifications', '')
  lines.push('- [Project](/.specs/project/PROJECT.md): Project vision and constraints')
  lines.push('- [Architecture](/.specs/codebase/ARCHITECTURE.md): System architecture')
  lines.push('- [Conventions](/.specs/codebase/CONVENTIONS.md): Coding conventions')
  lines.push('- [Stack](/.specs/codebase/STACK.md): Technology stack')
  lines.push('')

  return lines.join('\n')
}

function main(): void {
  const content = generate()
  const outputPath = path.join(ROOT, 'llms.txt')
  fs.writeFileSync(outputPath, content, 'utf-8')
  console.log(`Generated llms.txt with ${content.split('\n').length} lines`)
}

main()
