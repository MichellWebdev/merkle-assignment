import React, { useState, useEffect } from 'react';

import { getStory } from '../../services/hnApi';

import image from './../../utils/assets/dummy-image-one.jpg';

import './Story.scss';

interface StoryProps {
  title: string;
  storyScore: string;
  storyUrl: string;
  storyAuthor: string;
  storyTimestamp: string;
  // storyTimestamp: Date;
  authorKarma: string;
  storyId: number;
  url?: string;
}

export const Story = ({
  title,
  storyScore,
  storyUrl,
  storyAuthor,
  storyTimestamp,
  authorKarma,
  storyId,
  url,
}: StoryProps) => {
  const [story, setStory] = useState({ url, title });

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  // console.log('story', story.url);

  return story && story.url ? (
    <div className='page-container card'>
      <div className='direction-row'>
        <img className='story__image' src={image} alt='dummy-image' />
        <div className='direction-column story__title-container'>
          <h2>{story.title}</h2>
          <p>{JSON.stringify(storyId)}</p>
          <a className='story__url' href={story.url}>
            {story.url}
          </a>
          <div className='direction-row story__info'>
            <p>Posted by: {storyAuthor}</p>
            <p>{storyTimestamp}</p>
            <p>Karma: {authorKarma}</p>
            <p className='story__score'>Story score: {storyScore}</p>
          </div>
        </div>
        <p className='story__score'>Story score: {storyScore}</p>
        <p>{JSON.stringify(story)}</p>
      </div>
    </div>
  ) : (
    <div></div>
  );
};
