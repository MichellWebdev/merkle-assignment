import React, { useEffect, useState } from 'react';

// API
import { getStoryIds, getStory } from '../../services/hnApi';

// Components
import { Story } from '../story/Story';

// StoriesData perhaps??
export const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  const mapIds = storyIds.map((storyId, key) => (
    <Story
      key={key}
      title=''
      storyScore='200'
      storyUrl='www.google.com'
      storyAuthor='Jane Doe'
      storyTimestamp='12/02/12'
      authorKarma='10'
      storyId={storyId}
    />
  ));

  return <div>{mapIds}</div>;
};

// NOTES!!!!!

// It returns as an array since all the story ids will be in an array from the API
// storyIds (the getter) will be initialised as an empty array and then the setter will give the correct array with data when used
// Usestate is used to store values
// const [storyIds, setStoryIds] = useState([]);

// const [story, setStory] = useState({});

// // Use effect is used for updating the values in the use state
// // the empty array might be able to be used for the random 10 stories
// // Maybe not because the emtpy array is something it will look for and then rerender
// useEffect(() => {
//   getStoryIds().then(data => setStoryIds(data));

//   // This is where I will do the random 10 - maybe??
//   // getStory('20970623').then(data => setStory(data));
//   // somewhere forEach story do something
//   // getStory('20970623').then(data => setStory(data.title));
// }, []);

// return (
//   <>
//     {/* <p>{JSON.stringify(story)}</p> */}
//     <p>{JSON.stringify(storyIds)}</p>
//   </>
// );
