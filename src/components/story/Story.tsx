import React, { useState, useEffect } from 'react';

// Api
import { getStory } from '../../services/storyApi';

// Asssets
import image from './../../utils/assets/dummy-image-one.jpg';

// Components
import { User } from '../user-information/User';

import './Story.scss';

export interface StoryItem {
  title: string;
  id: number;
  score: number;
  time: any;
  url: string;
  by: any;
}

interface StoryProps {
  storyItem?: StoryItem;
  storyId: number;
}

export const Story = ({ storyId, storyItem }: StoryProps) => {
  const [story, setStory] = useState({ ...storyItem });

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  const date = new Date(story.time * 1000).toLocaleDateString('en-GB', { hour: 'numeric', minute: 'numeric' });

  return story && story.url ? (
    <div className='page-container card'>
      <div className='direction-row'>
        <img className='story__image' src={image} alt='dummy-image' />
        <div className='direction-column story__container'>
          <a href={story.url} className='story__title'>
            <h2>{story.title}</h2>
          </a>
          <p>Story score: {story.score}</p>
          <a className='story__url' href={story.url}>
            {story.url}
          </a>
          <div className='direction-row story__info'>
            <p>{date}</p>
            <User userId={story.by} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
