import { StoryItem, UserItem } from '../components/story/Story';

export const selectStoryFields = ({ id, by, url, time, title, score }: StoryItem) => ({ id, by, url, time, title, score });

export const selectUserFields = ({ id, karma }: UserItem) => ({ id, karma });
