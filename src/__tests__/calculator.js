import React from 'react'
import {render, fireEvent} from '@testing-library/react'

import Calculator from '../calculator'

test('render', () => {
  const screen = render(<Calculator />)
  const clearButton = screen.getByText('AC')

  fireEvent.click(screen.getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
