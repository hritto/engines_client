import React, { Component} from 'react'
// import ReactDOM from 'react-dom'

import 'babel-polyfill'

// The editor core
import Editor, { Editable, createEmptyState } from 'ory-editor-core'
import 'ory-editor-core/lib/index.css' // we also want to load the stylesheets

// The default ui components
import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import 'ory-editor-ui/lib/index.css'

// import logo from './logo.svg';
import './App.css';

// Load some exemplary plugins:
// import slate from 'ory-editor-plugins-slate' // The rich text area plugin
// import 'ory-editor-plugins-slate/lib/index.css' // Stylesheets for the rich text area plugin
// import image from 'ory-editor-plugins-image'
// import 'ory-editor-plugins-image/lib/index.css'

// The rich text area plugin
import slate from 'ory-editor-plugins-slate'
import 'ory-editor-plugins-slate/lib/index.css'

// The spacer plugin
import spacer from 'ory-editor-plugins-spacer'
import 'ory-editor-plugins-spacer/lib/index.css'

// The image plugin
import image from 'ory-editor-plugins-image'
import 'ory-editor-plugins-image/lib/index.css'

// The video plugin
import video from 'ory-editor-plugins-video'
import 'ory-editor-plugins-video/lib/index.css'

// The parallax plugin
import parallax from 'ory-editor-plugins-parallax-background'
import 'ory-editor-plugins-parallax-background/lib/index.css'

// The html5-video plugin
import html5video from 'ory-editor-plugins-html5-video'
import 'ory-editor-plugins-html5-video/lib/index.css'

// The native handler plugin
import native from 'ory-editor-plugins-default-native'

// The divider plugin
import divider from 'ory-editor-plugins-divider'


import BlackBorder from './components/PluginBlackBorder'
import InputTextField from './components/input_test'
import ReactQuill from './components/quill'

// import parallax from 'ory-editor-plugins-parallax-background' // A plugin for parallax background images
// import 'ory-editor-plugins-parallax-background/lib/index.css' // Stylesheets for parallax background images
require('react-tap-event-plugin')() // react-tap-event-plugin is required by material-ui which is used by ory-editor-ui so we need to call it here

// Define which plugins we want to use. We only have slate and parallax available, so load those.
// const plugins = {
//   content: [slate(), image], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
//   layout: [BlackBorder] // Define plugins for layout cells
// };

// Creates an empty editable
const content = createEmptyState();

// Instantiate the editor
// const editor = new Editor({
//   plugins: plugins,
//   // defaultPlugin: slate(),
//   // pass the content state - you can add multiple editables here
//   editables: [content],
// });


// Define which plugins we want to use (all of the above)
const plugins = {
  content: [ReactQuill, spacer, image, video, divider, html5video, InputTextField],
  layout: [parallax({ defaultPlugin: slate() }), BlackBorder],

  // If you pass the native key the editor will be able to handle native drag and drop events (such as links, text, etc).
  // The native plugin will then be responsible to properly display the data which was dropped onto the editor.
  native
}

const editor = new Editor({
  plugins: plugins,
  defaultPlugin: ReactQuill,
  // pass the content states
  editables: [
    content
  ],
})

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">

        </div>

        {/* Content area */}
        <Editable editor={editor} id={content.id} onChange={(editable) => {
          // console.log(editable)
        }}/>

        {/*  Default user interface  */}
        <Trash editor={editor}/>
        <DisplayModeToggle editor={editor}/>
        <Toolbar editor={editor}/>
      </div>
    );
  }
}

export default App;
