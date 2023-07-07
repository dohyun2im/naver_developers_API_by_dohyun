import { Button, DatePicker, DatePickerProps, Input, Row, Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import locale from 'antd/es/date-picker/locale/ko_KR';
import CustomHeader from './components/Header';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const SideBar = styled.div`
  width: 200px;
  height: 100vh;
  display: column;
  padding: 10px;
`;

interface ListData {
  period: string;
  ratio: number;
  group: string;
}

export default function App() {
  const [start, setStart] = useState<string>(dayjs('2023-01-01').format('YYYY-MM-DD'));
  const [end, setEnd] = useState<string>(dayjs().format('YYYY-MM-DD'));
  const [timeUnit, setTimeUnit] = useState<string>('date');
  const [gender, setGender] = useState<string>('');
  const [device, setDevice] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [category, setCategory] = useState<string>('50000000');
  const [keyword, setKeyword] = useState<string>('정장');
  const [list, setList] = useState<ListData[]>([]);
  console.log(list);

  const getNaverList = async (): Promise<void> => {
    try {
      const res = await axios.post(
        '/api/v1/datalab/shopping/category/keyword/age',
        {
          startDate: start,
          endDate: end,
          timeUnit: timeUnit,
          category: category,
          keyword: keyword,
          device: device,
          gender: gender,
          ages: [],
        },
        {
          headers: {
            'X-Naver-Client-Id': process.env.REACT_APP_ClientID,
            'X-Naver-Client-Secret': process.env.REACT_APP_Client_Secret,
            'Content-Type': 'application/json',
          },
        },
      );
      setList(res.data.results[0].data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePickStartDate: DatePickerProps['onChange'] = (date: any, dateString: string): void => {
    setStart(dateString);
  };

  const handlePickEndDate: DatePickerProps['onChange'] = (date: any, dateString: string): void => {
    setEnd(dateString);
  };
  const handleSelectTimeUnitChange = (value: string): void => {
    setTimeUnit(value);
  };

  const handleSelectGenderChange = (value: string): void => {
    setGender(value);
  };

  const handleSelectDeviceChange = (value: string): void => {
    setDevice(value);
  };

  const handleSelectAgeChange = (value: string): void => {
    setAge(value);
  };

  const handleCategoryOnChange = (e: any): void => {
    setCategory(e.target.value);
  };

  const handleKeywordOnChange = (e: any): void => {
    setKeyword(e.target.value);
  };

  const handleButtonClick = (): void => {
    getNaverList();
  };

  useEffect(() => {
    getNaverList();
  }, []);

  return (
    <>
      <CustomHeader />
      <SideBar>
        <DatePicker
          locale={locale}
          defaultValue={dayjs('2023-01-01')}
          placeholder="StartDate"
          onChange={handlePickStartDate}
        />
        <DatePicker locale={locale} defaultValue={dayjs()} placeholder="EndDate" onChange={handlePickEndDate} />
        <Select
          value={timeUnit}
          style={{ width: 120 }}
          onChange={handleSelectTimeUnitChange}
          options={[
            { value: 'date', label: '일간' },
            { value: 'week', label: '주간' },
            { value: 'month', label: '월간' },
          ]}
        />
        <Select
          defaultValue=""
          style={{ width: 120 }}
          onChange={handleSelectGenderChange}
          options={[
            { value: '', label: '전체 성별' },
            { value: 'm', label: '남성' },
            { value: 'f', label: '여성' },
          ]}
        />
        <Select
          defaultValue=""
          style={{ width: 120 }}
          onChange={handleSelectDeviceChange}
          options={[
            { value: '', label: '전체 기기' },
            { value: 'pc', label: 'PC' },
            { value: 'mo', label: 'Mobile' },
          ]}
        />
        <Select
          defaultValue=""
          style={{ width: 120 }}
          onChange={handleSelectAgeChange}
          options={[
            { value: '', label: '전체 연령' },
            { value: '10', label: '10 ~ 19세' },
            { value: '20', label: '20 ~ 29세' },
            { value: '30', label: '30 ~ 39세' },
            { value: '40', label: '40 ~ 49세' },
            { value: '50', label: '50 ~ 59세' },
            { value: '60', label: '60세 이상' },
          ]}
        />
        <Input placeholder="카테고리" value={category} onChange={handleCategoryOnChange} style={{ width: 120 }} />
        <Input placeholder="키워드" value={keyword} onChange={handleKeywordOnChange} style={{ width: 120 }} />
        <Button style={{ width: 120 }} onClick={handleButtonClick}>
          조회
        </Button>
      </SideBar>
    </>
  );
}
