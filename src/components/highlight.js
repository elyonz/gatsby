import React from 'react'

const Highlight = ({ color = 'black', children }) => (
  <span style={{ color }}>{children}</span>
)

export default Highlight
