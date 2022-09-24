import { render } from '@redwoodjs/testing/web'

import Signin from './Signin'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Signin', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Signin />)
    }).not.toThrow()
  })
})
