import { render } from '@redwoodjs/testing/web'

import SubService from './SubService'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SubService', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubService />)
    }).not.toThrow()
  })
})
