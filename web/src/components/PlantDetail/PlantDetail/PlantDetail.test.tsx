import { render } from '@redwoodjs/testing/web'

import PlantDetail from './PlantDetail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlantDetail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlantDetail />)
    }).not.toThrow()
  })
})
