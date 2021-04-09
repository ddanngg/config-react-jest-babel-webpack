import React from 'react'
import {render} from '@testing-library/react'

import AutoScalingText from '../auto-scaling-text'

test('render AutoScalingText', () => {
  const {debug} = render(<AutoScalingText />)
  debug()
})
