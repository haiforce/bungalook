import { render } from '@redwoodjs/testing/web'

import Categroy from './Categroy'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Categroy', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Categroy />)
    }).not.toThrow()
  })
})
