import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  updateJson,
} from '@nx/devkit'

interface IPackageGeneratorSchema {
  name: string
  tags: string
}

export default async function packageGenerator(
  tree: Tree,
  schema: IPackageGeneratorSchema,
): Promise<void> {
  const { fileName } = names(schema.name)
  const targetDir = joinPathFragments('packages', fileName)
  const tags = schema.tags
    ? schema.tags.split(',').map((t: string) => t.trim())
    : ['scope:shared']

  generateFiles(tree, joinPathFragments(__dirname, 'files'), targetDir, {
    name: fileName,
    scopedName: `@ai-first/${fileName}`,
    tags: JSON.stringify(tags),
    template: '',
  })

  // Add path alias to tsconfig.base.json
  updateJson(tree, 'tsconfig.base.json', (json) => {
    json.compilerOptions = json.compilerOptions || {}
    json.compilerOptions.paths = json.compilerOptions.paths || {}
    json.compilerOptions.paths[`@ai-first/${fileName}`] = [
      `packages/${fileName}/src/index.ts`,
    ]
    return json
  })

  await formatFiles(tree)
}
