import axios from 'axios';

import { selectStoryFields, selectUserFields } from '../utils/selectFields';

// TODO: rename file maybe

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;
export const userUrl = `${baseUrl}user/`;

export const getStory = async (storyId: number) => {
  const result = await axios.get(`${storyUrl + storyId}.json`).then(({ data }: any) => data && selectStoryFields(data));

  return result;
};

export const getStoryIds = async () => {
  const result = await axios.get(topStoriesUrl).then(({ data }: any) => data);

  return result;
};

// Rename this file to storiesApi
// Create a new one called userApi - those steps only if they make sense
// Create getUserIds
// Create getUsers and pass the user name in the Api file
// In the story.tsx file you pass the "by" as the user name and from here it should be possible to get the karma

// Slight correction - maybe only need one and not two functions. The userId is the userBy in the stories.
// so only create a getUser(userId) and pass in story.by as the userId
