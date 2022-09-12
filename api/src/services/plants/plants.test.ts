import { plants, plant, createPlant, updatePlant, deletePlant } from './plants'
import type { StandardScenario } from './plants.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('plants', () => {
  scenario('returns all plants', async (scenario: StandardScenario) => {
    const result = await plants()

    expect(result.length).toEqual(Object.keys(scenario.plant).length)
  })

  scenario('returns a single plant', async (scenario: StandardScenario) => {
    const result = await plant({ id: scenario.plant.one.id })

    expect(result).toEqual(scenario.plant.one)
  })

  scenario('creates a plant', async (scenario: StandardScenario) => {
    const result = await createPlant({
      input: {
        name: 'String',
        description: 'String',
        price: 2111190.1441587675,
        media: { foo: 'bar' },
        collectionId: scenario.plant.two.collectionId,
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
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.price).toEqual(2111190.1441587675)
    expect(result.media).toEqual({ foo: 'bar' })
    expect(result.collectionId).toEqual(scenario.plant.two.collectionId)
    expect(result.size).toEqual('String')
    expect(result.soil).toEqual('String')
    expect(result.flowers).toEqual('String')
    expect(result.foliage).toEqual('String')
    expect(result.attracts).toEqual('String')
    expect(result.flowering).toEqual('String')
    expect(result.conditions).toEqual('String')
    expect(result.plantType).toEqual('String')
    expect(result.tag).toEqual('String')
    expect(result.vicfloraUid).toEqual('String')
  })

  scenario('updates a plant', async (scenario: StandardScenario) => {
    const original = await plant({ id: scenario.plant.one.id })
    const result = await updatePlant({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a plant', async (scenario: StandardScenario) => {
    const original = await deletePlant({ id: scenario.plant.one.id })
    const result = await plant({ id: original.id })

    expect(result).toEqual(null)
  })
})
