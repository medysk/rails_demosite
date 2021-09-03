import { AxiosResponse } from 'axios';

export const requestWrapper = async <T>(
  request: () => Promise<AxiosResponse<T>>,
): Promise<T> => {
  try {
    const { data } = await request();
    return data;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};
