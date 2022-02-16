import React, { useEffect, useState } from 'react';

// API
import { getStoryIds } from '../../services/storyApi';

// Components
import { Story } from '../story/Story';

export const Stories = () => {
  const [loading, setLoading] = useState(true);
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => {
      setStoryIds(data);
      setLoading(false);
    });
  }, []);

  const stories = storyIds.map((storyId, key) => <Story key={key} storyId={storyId} />);

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading stories...</h1>
      </div>
    );
  }

  return <div>{stories}</div>;
};
