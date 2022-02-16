import React, { useEffect, useState } from 'react';

// API
import { getStoryIds } from '../../services/storyApi';

// Components
import { Story } from '../story/Story';

export const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [storyScore, setStoryScore] = useState();

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
    // getStoryIds().then(data => console.log('data', data.id));
  }, []);

  console.log('storyIds', storyIds);

  // useEffect(() => {
  //   getStoryScore(storyIds).then(data => data && setStoryScore(data));
  // }, []);

  // console.log('storyScoreOne', storyScore);

  // const sortByScore = storyScore.sort(function (lowestScore: any, highestScore: any) {
  //   return lowestScore - highestScore;
  // });

  // console.log('sortByScoreTest', sortByScore);

  const stories = storyIds.map((storyId, key) => <Story key={key} storyId={storyId} />);

  return <div>{stories}</div>;
};

// WHAT if there's a component one level higher so I can actually pass the storyID??? that way all the <Story /> components will have been rendered and then
// It could be possible to sort them via the sort function????
