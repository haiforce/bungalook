import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PlantCreateArgs>({
  plant: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        price: 7132752.71986506,
        media: { foo: 'bar' },
        information: { foo: 'bar' },
        tag: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        price: 5620202.1141237775,
        media: { foo: 'bar' },
        information: { foo: 'bar' },
        tag: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
