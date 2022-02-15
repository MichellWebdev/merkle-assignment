import React, { useEffect, useState } from 'react';

// API
import { getStoryIds } from '../../services/storyApi';

// Components
import { Story } from '../story/Story';

export const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  console.log('storyIds', storyIds);

  const stories = storyIds.map((storyId, key) => <Story key={key} storyId={storyId} />);

  return <div>{stories}</div>;
};
