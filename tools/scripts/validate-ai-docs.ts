import * as fs from 'node:fs'
import * as path from 'node:path'

interface IValidationResult {
  readonly file: string
  readonly errors: readonly string[]
  readonly warnings: readonly string[]
}

const ROOT = path.resolve(import.meta.dirname, '../../')

function findProjects(): readonly string[] {
  const projects: string[] = []
  const dirs = ['apps', 'packages']

  for (const dir of dirs) {
    const fullDir = path.join(ROOT, dir)
    if (!fs.existsSync(fullDir)) continue

    for (const entry of fs.readdirSync(fullDir)) {
      const projectDir = path.join(fullDir, entry)
      if (fs.statSync(projectDir).isDirectory() && entry !== '.gitkeep') {
        projects.push(path.relative(ROOT, projectDir))
      }
    }
  }

  return projects
}

function validateProject(projectPath: string): IValidationResult {
  const errors: string[] = []
  const warnings: string[] = []
  const fullPath = path.join(ROOT, projectPath)

  // Check CLAUDE.md exists
  const claudeMd = path.join(fullPath, 'CLAUDE.md')
  if (!fs.existsSync(claudeMd)) {
    errors.push('Missing CLAUDE.md')
  } else {
    const content = fs.readFileSync(claudeMd, 'utf-8')
    if (!content.includes('Dependency Rules')) {
      warnings.push('CLAUDE.md missing "Dependency Rules" section')
    }
  }

  // Check .serena/project.yml exists
  const serenaConfig = path.join(fullPath, '.serena', 'project.yml')
  if (!fs.existsSync(serenaConfig)) {
    errors.push('Missing .serena/project.yml')
  }

  // Check project.json exists
  const projectJson = path.join(fullPath, 'project.json')
  if (!fs.existsSync(projectJson)) {
    errors.push('Missing project.json')
  } else {
    const content = JSON.parse(fs.readFileSync(projectJson, 'utf-8'))
    if (!content.tags || content.tags.length === 0) {
      warnings.push('project.json missing NX tags for module boundaries')
    }
  }

  // Check tsconfig.json exists
  const tsconfig = path.join(fullPath, 'tsconfig.json')
  if (!fs.existsSync(tsconfig)) {
    errors.push('Missing tsconfig.json')
  }

  return { file: projectPath, errors, warnings }
}

function validateRootDocs(): IValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Check root CLAUDE.md
  if (!fs.existsSync(path.join(ROOT, 'CLAUDE.md'))) {
    errors.push('Missing root CLAUDE.md')
  }

  // Check llms.txt
  if (!fs.existsSync(path.join(ROOT, 'llms.txt'))) {
    errors.push('Missing llms.txt')
  }

  // Check .specs structure
  const specsDir = path.join(ROOT, '.specs')
  if (!fs.existsSync(specsDir)) {
    errors.push('Missing .specs/ directory')
  } else {
    const requiredSpecs = [
      'project/PROJECT.md',
      'project/ROADMAP.md',
      'project/STATE.md',
      'codebase/ARCHITECTURE.md',
      'codebase/CONVENTIONS.md',
      'codebase/STACK.md',
    ]
    for (const spec of requiredSpecs) {
      if (!fs.existsSync(path.join(specsDir, spec))) {
        errors.push(`Missing .specs/${spec}`)
      }
    }
  }

  // Check root .serena
  if (!fs.existsSync(path.join(ROOT, '.serena', 'project.yml'))) {
    errors.push('Missing root .serena/project.yml')
  }

  return { file: 'root', errors, warnings }
}

function main(): void {
  console.log('Validating AI documentation...\n')

  const results: IValidationResult[] = []

  // Validate root
  results.push(validateRootDocs())

  // Validate each project
  const projects = findProjects()
  for (const project of projects) {
    results.push(validateProject(project))
  }

  // Report
  let hasErrors = false
  for (const result of results) {
    if (result.errors.length === 0 && result.warnings.length === 0) {
      console.log(`  [PASS] ${result.file}`)
      continue
    }

    for (const error of result.errors) {
      console.log(`  [FAIL] ${result.file}: ${error}`)
      hasErrors = true
    }

    for (const warning of result.warnings) {
      console.log(`  [WARN] ${result.file}: ${warning}`)
    }
  }

  console.log('')

  if (hasErrors) {
    console.log('Validation FAILED. Fix errors above.')
    process.exit(1)
  } else {
    console.log('Validation PASSED.')
  }
}

main()
