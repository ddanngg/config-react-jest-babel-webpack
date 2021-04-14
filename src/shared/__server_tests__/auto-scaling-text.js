import React from 'react'
import ReactDOMServer from 'react-dom/server'

import AutoScalingText from '../auto-scaling-text'

test('render server side', () => {
  ReactDOMServer.renderToString(<AutoScalingText />)
})

// console.log(window) -> will throw error because this run in server-side
