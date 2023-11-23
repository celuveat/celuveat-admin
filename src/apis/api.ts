import { apiClient } from './apiClient';

export const postKey = async (key: string) => {
  const response = await apiClient.post(`/check`, { adminKey: key });
  return response.data;
};
