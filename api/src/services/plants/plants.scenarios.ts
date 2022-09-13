import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PlantCreateArgs>({
  plant: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        price: 3513978.2013864205,
        media: { foo: 'bar' },
        size: 'String',
        soil: 'String',
        flowers: 'String',
        foliage: 'String',
        attracts: 'String',
        flowering: 'String',
        conditions: 'String',
        plantType: 'String',
        tag: 'String',
        vicfloraUuid: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        price: 7699901.364277922,
        media: { foo: 'bar' },
        size: 'String',
        soil: 'String',
        flowers: 'String',
        foliage: 'String',
        attracts: 'String',
        flowering: 'String',
        conditions: 'String',
        plantType: 'String',
        tag: 'String',
        vicfloraUuid: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
