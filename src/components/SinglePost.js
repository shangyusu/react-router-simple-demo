import React, { Component, PropTypes } from 'react';
import posts from '../posts';


export default class SinglePost extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }

  render() {
    const { params } = this.props;
    const post = posts.filter(p => p.id === +params.postId)[0];
    return (
      <div>
        <h1>{`Post ${post.id} - ${post.title}`}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
}
