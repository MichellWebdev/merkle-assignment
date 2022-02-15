import React, { useState, useEffect } from 'react';

// Api
import { getStory } from '../../services/storyApi';

// Utils
import image from './../../utils/assets/dummy-image-one.jpg';
import { formatDate, formatUrl } from '../../utils/formatting';

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

  return story && story.url ? (
    <div className='page-container card'>
      <div className='direction-row'>
        <div className='direction-column story__image-container'>
          <img className='story__image' src={image} alt='dummy-image' />
        </div>
        <div className='direction-column story__container'>
          <a href={story.url} className='story__title'>
            <p>{story.title}</p>
          </a>
          <p>Story score: {story.score}</p>
          <a className='story__url' href={story.url}>
            {formatUrl(story.url)}
          </a>
          <div className='direction-row story__info'>
            <p>{formatDate(story.time)}</p>
            <User userId={story.by} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
