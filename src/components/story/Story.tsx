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

  // let scoreArray = [];

  // scoreArray.push(story.score);

  // console.log('Individual story', scoreArray);

  return story && story.url ? (
    <div className='page-container card'>
      <div className='container-direction-row'>
        <div className='display-none-large'>
          <a href={story.url} className='story__title'>
            {story.title}
          </a>
          <p className='story__score'>Story score: {story.score}</p>
          <a className='story__url' href={story.url}>
            {formatUrl(story.url)}
          </a>
        </div>

        <div className='direction-column story__image-container'>
          <img className='story__image' src={image} alt='dummy-image' />
        </div>
        <div className='direction-column story__container'>
          <a href={story.url} className='story__title display-none-small'>
            {story.title}
          </a>
          <p className='story__score display-none-small'>Story score: {story.score}</p>
          <a className='story__url display-none-small' href={story.url}>
            {formatUrl(story.url)}
          </a>
          <div className='direction-row story__info'>
            <p>Posted: {formatDate(story.time)}</p>
            <User userId={story.by} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
