import React, { useState, useEffect } from 'react';

// Api
import { getStory } from '../../services/storyApi';

// Utils
import { imageArray } from '../../utils/images';
import { formatDate, formatUrl } from '../../utils/formatting';

// Components
import { User } from '../user-information/User';
import { StorySmall } from './StorySmall';

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

  const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];

  return story && story.url ? (
    <div className='page-container card'>
      <div className='container-direction-row'>
        <StorySmall storyTitle={story.title} storyUrl={story.url} storyScore={story.score} />

        <div className='direction-column story__image-container'>
          <img className='story__image' src={randomImage} alt='dummy-image' />
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
