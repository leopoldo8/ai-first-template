import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
} from '@nx/devkit'

interface IBoundedContextGeneratorSchema {
  name: string
}

export default async function boundedContextGenerator(
  tree: Tree,
  schema: IBoundedContextGeneratorSchema,
): Promise<void> {
  const { className, fileName, propertyName } = names(schema.name)
  const targetDir = joinPathFragments(
    'apps/api/src/bounded-contexts',
    fileName,
  )

  generateFiles(tree, joinPathFragments(__dirname, 'files'), targetDir, {
    className,
    fileName,
    propertyName,
    template: '',
  })

  await formatFiles(tree)
}
