import axios from 'axios';

export default async function getNaverLists({
    startDate,
    endDate,
    timeUnit,
    category,
    keyword,
    device,
    gender,
    ages,
}: { 
    startDate: string,
    endDate: string,
    timeUnit: 'date' | 'week' | 'month',
    category: string,
    keyword: string,
    device: '' | 'mo' | 'pc',
    gender: '' | 'm' | 'f',
    ages: string[],
 }) {
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
        ages
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