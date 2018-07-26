import React, {Component} from 'react'
// import logo from './logo.svg';
import './App.css';

// The editor core
import Editor, { Editable, createEmptyState } from 'ory-editor-core'
import 'ory-editor-core/lib/index.css' // we also want to load the stylesheets

// Require our ui components (optional). You can implement and use your own ui too!
import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import 'ory-editor-ui/lib/index.css'

// Load some exemplary plugins:
import slate from 'ory-editor-plugins-slate' // The rich text area plugin
import 'ory-editor-plugins-slate/lib/index.css' // Stylesheets for the rich text area plugin
import image from 'ory-editor-plugins-image'
import 'ory-editor-plugins-image/lib/index.css'
// import parallax from 'ory-editor-plugins-parallax-background' // A plugin for parallax background images
// import 'ory-editor-plugins-parallax-background/lib/index.css' // Stylesheets for parallax background images
require('react-tap-event-plugin')() // react-tap-event-plugin is required by material-ui which is used by ory-editor-ui so we need to call it here

// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins = {
  content: [slate(), image], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
  layout: [] // Define plugins for layout cells
};

// Creates an empty editable
const content = createEmptyState();

// Instantiate the editor
const editor = new Editor({
  plugins: plugins,
  defaultPlugin: slate(),
  // pass the content state - you can add multiple editables here
  editables: [content],
});

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">

        </div>

        {/* Content area */}
        <Editable editor={editor} id={content.id} onChange={(editable) => {
          console.log(editable)
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
