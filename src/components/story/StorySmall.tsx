import React from 'react';

import { formatUrl } from '../../utils/formatting';

import './Story.scss';

interface StorySmallProps {
  storyTitle?: string;
  storyUrl: string;
  storyScore?: number;
}

export const StorySmall = ({ storyTitle, storyUrl, storyScore }: StorySmallProps) => {
  return (
    <div className='display-none-large'>
      <a href={storyUrl} className='story__title'>
        {storyTitle}
      </a>
      <p className='story__score'>Story score: {storyScore}</p>
      <a className='story__url' href={storyUrl}>
        {formatUrl(storyUrl)}
      </a>
    </div>
  );
};
