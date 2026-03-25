export const BASE_TSCONFIG = {
  compilerOptions: {
    strict: true,
    target: 'es2022',
    module: 'nodenext',
    moduleResolution: 'nodenext',
    isolatedModules: true,
    skipLibCheck: true,
    noUnusedLocals: true,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: true,
    noImplicitOverride: true,
  },
} as const
