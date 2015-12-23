import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import PostList from './components/PostList';
import SinglePost from './components/SinglePost';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about-us" component={AboutUs} />
    <Route path="/posts">
      <IndexRoute component={PostList} />
      <Route path=":postId" component={SinglePost} />
    </Route>
  </Route>
);
