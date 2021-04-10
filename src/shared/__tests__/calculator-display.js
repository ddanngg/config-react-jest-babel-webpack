import React from 'react'
import {render} from '@testing-library/react'
import {ThemeProvider} from '@emotion/react'

import CalculatorDisplay from '../calculator-display'

import {dark} from '../../themes'

test('render', () => {
  const {container} = render(
    <ThemeProvider theme={dark}>
      <CalculatorDisplay value="0" />
    </ThemeProvider>,
  )
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      color: white;
      background: #1c191c;
    }

    <div
      class="emotion-0 emotion-1"
    >
      <div
        class="autoScalingText"
        data-testid="total"
        style="transform: scale(1,1);"
      >
        0
      </div>
    </div>
  `)
})
