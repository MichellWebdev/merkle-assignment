import axios from 'axios';

import { selectStoryFields, selectStoryScore } from '../utils/selectFields';

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

  const shuffleArray: [] = result.sort(() => 0.5 - Math.random()).slice(0, 10);

  const storyItemList: any = [];

  for (const story in shuffleArray) {
    const storyItem = await axios
      .get(`${storyUrl + shuffleArray[story]}.json`)
      .then(({ data }: any) => data && selectStoryScore(data));

    storyItemList.push(storyItem);
  }

  const orderByScore = storyItemList.sort((lowestScore: any, highestScore: any) => {
    return lowestScore.score - highestScore.score;
  });

  let orderedIds: any = [];

  orderByScore.forEach((e: any) => {
    orderedIds.push(e.id);
    return e.id;
  });

  return orderedIds;
};
