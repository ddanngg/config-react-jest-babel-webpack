import React from 'react'
import PropTypes from 'prop-types'

import AutoScalingText from './auto-scaling-text'

import {getFormattedValue} from './utils'

function CalculatorDisplay(props) {
  const {value, ...restProps} = props
  const formattedValue = getFormattedValue(
    value,
    typeof window === 'undefined' ? 'en-US' : window.navigator.language,
  )

  return (
    <div
      {...restProps}
      css={{
        color: 'white',
        background: '#1c191c',
        lineHeight: '130px',
        fontSize: '6em',
        flex: '1',
      }}
    >
      <AutoScalingText>{formattedValue}</AutoScalingText>
    </div>
  )
}

export default CalculatorDisplay

CalculatorDisplay.propTypes = {
  value: PropTypes.string.isRequired,
}
