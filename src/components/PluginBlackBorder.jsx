import React from 'react'

// You are obviously not limited to material-ui, but we really enjoy
// the material-ui svg icons!
import CropSquare from 'material-ui/svg-icons/image/crop-square'
import slate from 'ory-editor-plugins-slate'

const BlackBorderPlugin = ({ children }) => (
  <div classsName='black_border' style={{ border: '5px solid black', padding: '16px' }}>
    {children}
  </div>
)

export default {
  Component: BlackBorderPlugin,
  IconComponent: <CropSquare />,
  defaultPlugin: slate(),
  name: 'example/layout/black-border',
  version: '0.0.1',
  text: 'Black border'
}
