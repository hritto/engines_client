import React from 'react'

// You are obviously not limited to material-ui, but we really enjoy
// the material-ui svg icons!
import StarIcon from 'material-ui/svg-icons/toggle/star'

// This is the ReactJS component which you can find below this snippet
import EditorQuill from './testQuill'

export default {
  Component: EditorQuill,
  IconComponent: <StarIcon />,
  name: 'example/content/quill',
  version: '0.0.1',
  text: 'Quill'
}
