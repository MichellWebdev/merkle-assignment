import React from 'react';

import { Header } from './common/header/Header';
import { Story, StoryItem } from './components/story/Story';
import { Stories } from './components/stories/Stories';

export const App = () => (
  <>
    <Header header='Stories' />
    <Stories />
  </>
);
