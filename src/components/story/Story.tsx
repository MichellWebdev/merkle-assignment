import React from 'react';

import image from './../../utils/assets/dummy-image-one.jpg';

import './Story.scss';

interface StoryProps {
  storyTitle: string;
  storyScore: string;
  storyUrl: string;
  storyAuthor: string;
  storyTimestamp: string;
  // storyTimestamp: Date;
  authorKarma: string;
}

export const Story = ({ storyTitle, storyScore, storyUrl, storyAuthor, storyTimestamp, authorKarma }: StoryProps) => (
  <div className='page-container card'>
    <div className='direction-row'>
      <img className='story__image' src={image} alt='dummy-image' />
      <div className='direction-column story__title-container'>
        <h2>{storyTitle}</h2>
        <a className='story__url' href={storyUrl}>
          {storyUrl}
        </a>
      </div>
      <p className='story__score'>Story score: {storyScore}</p>
    </div>
    <div className='direction-row story__info'>
      <p>Posted by: {storyAuthor}</p>
      <p>{storyTimestamp}</p>
      <p>Karma: {authorKarma}</p>
    </div>
  </div>
);
