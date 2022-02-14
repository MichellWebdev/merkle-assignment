import React, { useState, useEffect } from 'react';

import { getStory } from '../../services/hnApi';
import { getUser } from '../../services/userApi';
import { selectStoryScore } from '../../utils/selectFields';

import image from './../../utils/assets/dummy-image-one.jpg';

import './Story.scss';

export interface StoryItem {
  title: string;
  id: number;
  score: number;
  time: any; // Date??
  url: string;
  by: any; //string
}

export interface UserItem {
  karma: number;
  id: string;
}

interface StoryProps {
  storyItem?: StoryItem;
  userItem?: UserItem;
  storyId: number;
  // userId?: string;
  // missing author karma right now
}

export const Story = ({ storyId, storyItem, userItem }: StoryProps) => {
  const [story, setStory] = useState({ ...storyItem });
  const [user, setUser] = useState({ ...userItem });

  // console.log('user', user);

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
    // getUser(userId).then(userData => userData && setUser(userData));
  }, []);

  // Random way to fix it but would it be possible to have it in another component where it's only the userId and then pass it in here as part of the return?? would probably need to map something

  // useEffect(() => {
  //   // getUser(story.by).then(data => console.log(data));
  // }, []);

  // const userId: string = story.by;
  // console.log('story', story);

  const date = new Date(story.time * 1000).toLocaleDateString('en-GB', { hour: 'numeric', minute: 'numeric' });

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
        {/* <p className='story__score'>Story score: {story.score}</p> */}
      </div>
    </div>
  ) : null;
};
