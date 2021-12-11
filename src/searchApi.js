import axios from 'axios';
import { getApiKey } from './getApiKey';

export const searchApi = (content) => {
  const restApi = getApiKey();
  return axios
    .request({
      method: 'get',
      url: `https://dapi.kakao.com/v2/search/web?query=${content}`,
      headers: {
        Authorization: `KakaoAK ${restApi}`,
      },
    })
    .then((res) => {
      return res.data.documents;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
