
import React from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'
class NewPost extends React.Component {
  state = {
    title: ''
  }
  componentDidMount() {
    passCsrfToken(document, axios)
  }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const post = {
      title: this.state.title
    }

    axios
      .post('/api/posts', post)
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
  }
  render() {
    return (
      <div>
        <h1>New Post</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
            <input
              name="title"
              placeholder="title"
              onChange={this.handleChange}
              type="text"
            />
            
          <button>Create Post</button>
        </form>
      </div>
    )
  }
}

export default NewPost