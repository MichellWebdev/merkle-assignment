import React, { useState, useEffect } from 'react';

import { getStory } from '../../services/hnApi';

import image from './../../utils/assets/dummy-image-one.jpg';

import './Story.scss';

export interface StoryItem {
  title: string;
  id: number;
  score: number;
  time: any; // Date??
  url: string;
  by: string;
}

interface StoryProps {
  storyItem?: StoryItem;
  storyId: number;
  // missing author karma right now
}

export const Story = ({ storyId, storyItem }: StoryProps) => {
  const [story, setStory] = useState({ ...storyItem });
  // const [user, setUser] = useState({ ...userItem });

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
    // getUser(story.by).then(data => data && setUser(data))
    // Above doesn't work exactly - it showed up when using setStory.by but gave an error so find a solution
  }, []);

  // format so it's HH:MM DD-MM-YYYY/YY
  const date = new Date(story.time * 1000).toLocaleDateString('en-us');

  return story && story.url ? (
    <div className='page-container card'>
      <div className='direction-row'>
        <img className='story__image' src={image} alt='dummy-image' />
        <div className='direction-column story__title-container'>
          <a href={story.url} className='story__title'>
            <h2>{story.title}</h2>
          </a>
          <p>Story score: {story.score}</p>
          <a className='story__url' href={story.url}>
            {story.url}
          </a>
          <div className='direction-row story__info'>
            <p>Posted by: {story.by}</p>
            <p>{date}</p>
            <p>Karma: {'authorKarma'}</p>
          </div>
        </div>
        <p className='story__score'>Story score: {story.score}</p>
      </div>
    </div>
  ) : null;
};
