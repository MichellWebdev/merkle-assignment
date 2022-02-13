import React, { useState, useEffect } from 'react';

import { getStory } from '../../services/hnApi';

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
  storyId: string;
}

export const Story = ({
  storyTitle,
  storyScore,
  storyUrl,
  storyAuthor,
  storyTimestamp,
  authorKarma,
  storyId,
}: StoryProps) => {
  useEffect(() => {}, []);

  return (
    <div className='page-container card'>
      <div className='direction-row'>
        <img className='story__image' src={image} alt='dummy-image' />
        <div className='direction-column story__title-container'>
          <h2>{storyTitle}</h2>
          <p>{JSON.stringify(storyId)}</p>
          <a className='story__url' href={storyUrl}>
            {storyUrl}
          </a>
          <div className='direction-row story__info'>
            <p>Posted by: {storyAuthor}</p>
            <p>{storyTimestamp}</p>
            <p>Karma: {authorKarma}</p>
            <p className='story__score'>Story score: {storyScore}</p>
          </div>
        </div>
        <p className='story__score'>Story score: {storyScore}</p>
      </div>
    </div>
  );
};
