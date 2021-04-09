import React from 'react'
import {render} from '@testing-library/react'

import CalculatorDisplay from '../calculator-display'

test('render', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="css-12149uf"
      >
        <div
          class="autoScalingText"
          style="transform: scale(1,1);"
        >
          0
        </div>
      </div>
    </div>
  `)
})
