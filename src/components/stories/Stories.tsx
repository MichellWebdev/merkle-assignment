import React, { useEffect, useState } from 'react';

// API
import { getStory, getStoryIds } from '../../services/hnApi';

// Components
import { Story } from '../story/Story';

export const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  const shuffleArray = storyIds.sort(() => 0.5 - Math.random()).slice(0, 10);

  const orderBy = shuffleArray.sort(function (lowestScore, highestScore) {
    return lowestScore - highestScore;
  });

  // console.log('orderBy', orderBy);

  const stories = shuffleArray.map((storyId, key) => <Story key={key} storyId={storyId} />);

  // console.log('stories', stories);

  // const score = [20, 50, 10, 200, 103, 3];
  // score.sort(function (lowestScore, highestScore) {
  //   return lowestScore - highestScore;
  // });

  // console.log('stories', stories);

  // const orderBy = stories.sort(function (lowestScore, highestScore) {
  //   return lowestScore - highestScore;
  // });

  // console.log('orderBy', orderBy);

  return <div>{stories}</div>;
};
