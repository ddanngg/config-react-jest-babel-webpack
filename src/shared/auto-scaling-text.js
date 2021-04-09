import React, {useRef} from 'react'
import PropTypes from 'prop-types'

import styles from './auto-scaling-text.module.css'

function AutoScalingText({children}) {
  const nodeRef = useRef(null)

  const getScale = () => {
    const node = nodeRef.current
    if (!node) {
      return 1
    }
    const parentNode = node.parentNode

    const availableWidth = parentNode.offsetWidth
    const actualWidth = node.offsetWidth
    const actualScale = availableWidth / actualWidth

    if (actualScale < 1) {
      return actualScale * 0.9
    }
    return 1
  }

  const scale = getScale()

  return (
    <div
      className={styles.autoScalingText}
      style={{transform: `scale(${scale},${scale})`}}
      ref={nodeRef}
    >
      {children}
    </div>
  )
}

export default AutoScalingText

AutoScalingText.propTypes = {
  children: PropTypes.node,
}
