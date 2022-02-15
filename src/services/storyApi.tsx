import axios from 'axios';

import { selectStoryFields } from '../utils/selectFields';

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
