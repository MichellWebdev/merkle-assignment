import { StoryItem } from '../components/story/Story';

export const selectFields = ({ id, by, url, time, title, score }: StoryItem) => ({ id, by, url, time, title, score });
