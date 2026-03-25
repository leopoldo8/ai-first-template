import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
} from '@nx/devkit'

interface IFeatureSpecGeneratorSchema {
  name: string
  size: 'small' | 'medium' | 'large'
}

export default async function featureSpecGenerator(
  tree: Tree,
  schema: IFeatureSpecGeneratorSchema,
): Promise<void> {
  const { fileName, className } = names(schema.name)
  const targetDir = joinPathFragments('.specs/features', fileName)

  if (schema.size === 'small') {
    // Small features only need a quick task
    const quickDir = joinPathFragments('.specs/quick')
    generateFiles(tree, joinPathFragments(__dirname, 'files/quick'), quickDir, {
      fileName,
      className,
      date: new Date().toISOString().split('T')[0],
      template: '',
    })
  } else {
    generateFiles(tree, joinPathFragments(__dirname, 'files/feature'), targetDir, {
      fileName,
      className,
      date: new Date().toISOString().split('T')[0],
      includeDesign: schema.size === 'large',
      template: '',
    })
  }

  await formatFiles(tree)
}
