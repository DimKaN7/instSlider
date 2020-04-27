import React from 'react';
import './App.css';

import User from './classes/User';
import PostFeature from './classes/PostFeature';
import getImages from './classes/ImageGetter';
import Post from './components/Post';

function App() {
  let context = require.context('./images/', false, /\.(jpg)$/);
  let user = new User(getImages(context), 'dimka_n7');
  context = require.context('./sliderImages/', false, /\.(jpg)$/);
  let images = getImages(context);
  let postFeature = new PostFeature('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 25, (new Date(2020, 3, 20, 15, 0, 0)).getTime());
  return (
    <Post user={user} postFeature={postFeature} images={images}></Post>
  );
}

export default App;
