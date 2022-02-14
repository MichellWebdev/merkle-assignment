import axios from 'axios';

import { selectFields } from '../utils/selectFields';

// TODO: rename file maybe

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

// Maybe do this here? run the function so you get 10 random stories on each render??
export const getStory = async (storyId: number) => {
  const result = await axios.get(`${storyUrl + storyId}.json`).then(({ data }: any) => data && selectFields(data));

  return result;
};

// When reading the assignment this should maybe be the topstories url instead?? I'm pretty sure
export const getStoryIds = async () => {
  // await axios get newStoriesUrl. Once you've gotton that, then get me the data and once you have it, return it
  const result = await axios.get(newStoriesUrl).then(({ data }: any) => data);

  return result;
};

// Rename this file to storiesApi
// Create a new one called userApi - those steps only if they make sense
// Create getUserIds
// Create getUsers and pass the user name in the Api file
// In the story.tsx file you pass the "by" as the user name and from here it should be possible to get the karma

// Slight correction - maybe only need one and not two functions. The userId is the userBy in the stories.
// so only create a getUser(userId) and pass in story.by as the userId
