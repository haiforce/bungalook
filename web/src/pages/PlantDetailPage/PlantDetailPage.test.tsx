import { render } from '@redwoodjs/testing/web'

import PlantDetailPage from './PlantDetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PlantDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlantDetailPage id={'42'} />)
    }).not.toThrow()
  })
})
