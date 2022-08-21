import { render } from '@redwoodjs/testing/web'

import PlantlistPage from './PlantlistPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PlantlistPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlantlistPage id={'42'} />)
    }).not.toThrow()
  })
})
