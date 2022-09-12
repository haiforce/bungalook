import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PlantCreateArgs>({
  plant: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        price: 5684870.149514614,
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
        vicfloraUid: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        price: 1853299.3709468015,
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
        vicfloraUid: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
