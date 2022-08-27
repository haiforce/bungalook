import { render } from '@redwoodjs/testing/web'

import PlantsList from './PlantsList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlantsList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlantsList />)
    }).not.toThrow()
  })
})
