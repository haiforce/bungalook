import { render } from '@redwoodjs/testing/web'

import StyleSheetTag from './StyleSheetTag'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StyleSheetTag', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StyleSheetTag />)
    }).not.toThrow()
  })
})
