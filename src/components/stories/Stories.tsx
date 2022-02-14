import React, { useEffect, useState } from 'react';

// API
import { getStoryIds } from '../../services/hnApi';

// Components
import { Story } from '../story/Story';

export const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  const shuffleArray = storyIds.sort(() => 0.5 - Math.random());

  const stories = shuffleArray.slice(0, 10).map((storyId, key) => <Story key={key} storyId={storyId} />);

  console.log('stories', stories);

  return <div>{stories}</div>;
};
