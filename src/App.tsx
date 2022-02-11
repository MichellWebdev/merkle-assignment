import React from 'react';

import { Header } from './common/header/Header';
import { Story } from './components/story/Story';

export const App = () => (
  <>
    <Header header='Stories' />
    <Story
      storyTitle='Title'
      storyScore='200'
      storyUrl='www.google.com'
      storyAuthor='Jane Doe'
      storyTimestamp='12/02/12'
      authorKarma='10'
    />
  </>
);
