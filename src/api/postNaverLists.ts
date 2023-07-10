import axios from 'axios';
import { FetchNaverListsParams } from '../types/index';

export default async function postNaverLists({
  startDate,
  endDate,
  timeUnit,
  category,
  keyword,
  device,
  gender,
  ages,
}: FetchNaverListsParams) {
  const res = await axios.post(
    '/api/v1/datalab/shopping/category/keyword/age',
    {
      startDate,
      endDate,
      timeUnit,
      category,
      keyword,
      device,
      gender,
      ages,
    },
    {
      headers: {
        'X-Naver-Client-Id': process.env.REACT_APP_ClientID,
        'X-Naver-Client-Secret': process.env.REACT_APP_Client_Secret,
        'Content-Type': 'application/json',
      },
    },
  );

  return res?.data?.results[0]?.data;
}