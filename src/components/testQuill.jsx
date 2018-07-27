import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '<p><em>Escriba aquí...<em></p>' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
    this.props.onChange(this.state)
  }

  createMarkup(str) {
    return { __html: str };
  }

  render() {
    // console.log(this.props)
    if (!this.props.readOnly && this.props.focused) {
      const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['clean']
        ],
      };

      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'color'
      ];
      return (
        <div className="my-plugin">
          <ReactQuill
            value={this.state.text}
            onChange={this.handleChange}
            modules={modules}
            formats={formats} />
        </div>
      )
    }
    return (
      <div className="my-plugin">
        <div dangerouslySetInnerHTML={this.createMarkup((this.state.text))} />
      </div>
    )
  }
}

export default Editor
