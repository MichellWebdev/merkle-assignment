import axios from 'axios';
import { selectUserFields } from '../utils/selectFields';

import { baseUrl } from './storyApi';

export const userUrl = `${baseUrl}user/`;

export const getUser = async (userId: string) => {
  const result = await axios.get(`${userUrl + userId}.json`).then(({ data }: any) => selectUserFields(data));

  return result;
};
