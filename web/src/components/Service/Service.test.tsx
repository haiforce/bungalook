import { render } from '@redwoodjs/testing/web'

import Service from './Service'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Service', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Service />)
    }).not.toThrow()
  })
})
