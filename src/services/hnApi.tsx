import axios from 'axios';

// TODO: rename file maybe

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

// Maybe do this here? run the function so you get 10 random stories on each render??
export const getStory = async (storyId: string) => {
  const result = await axios.get(`${storyUrl + storyId}.json`).then(({ data }) => data);

  return result;
};

export const getStoryIds = async () => {
  // await axios get newStoriesUrl. Once you've gotton that, then get me the data and once you have it, return it
  const result = await axios.get(newStoriesUrl).then(({ data }: any) => data);

  return result;
};
