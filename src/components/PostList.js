import React, { Component, PropTypes } from 'react';
import posts from '../posts';
import './PostList.css';


export default class PostList extends Component {
  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: posts
    };
  }

  handleClick(post) {
    const { history } = this.context;
    history.push(`/posts/${post.id}`);
  }

  renderPost(post) {
    return (
      <li className="post-item" onClick={this.handleClick.bind(this, post)}>
        <h4>{`${post.id} - ${post.title}`}</h4>
        <p>{post.body}</p>
      </li>
    );
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <ul>
          {posts.map(this.renderPost, this)}
        </ul>
      </div>
    );
  }
}
