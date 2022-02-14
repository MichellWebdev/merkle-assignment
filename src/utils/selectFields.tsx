import { StoryItem, UserItem } from '../components/story/Story';

interface StoryScore {
  id: string;
  score: number;
}

export const selectStoryFields = ({ id, by, url, time, title, score }: StoryItem) => ({ id, by, url, time, title, score });

export const selectStoryScore = ({ id, score }: StoryScore) => ({ id, score });

export const selectUserFields = ({ id, karma }: UserItem) => ({ id, karma });
