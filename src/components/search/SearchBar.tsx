import React, { useCallback, useEffect } from 'react';
import { notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setList } from '../../slice/naver';
import DatePickers from './DatePickers';
import TimeUnitSelect from './TimeUnitSelect';
import GenderSelect from './GenderSelect';
import DeviceSelect from './DeviceSelect';
import AgeSelect from './AgeSelect';
import CategoryInput from './CategoryInput';
import KeywordInput from './KeywordInput';
import getNaverLists from '../../api/getNaverLists';
import styled from '@emotion/styled';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchBarPCWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 20px 30px 20px;
  width: 1200px;
`;

export default function SearchBar() {
  const dispatch = useDispatch();
  const {
    startDate,
    endDate,
    timeUnit,
    category,
    keyword,
    device,
    gender,
    age,
  } = useSelector((state: any) => state.naver);
  const [api, contextHolder] = notification.useNotification();

  const errorKeyword = useCallback((): void => {
    api.destroy();
    api.error({
      message: '키워드를 확인하세요.',
      placement: 'topRight',
      duration: 5,
    });
  }, []);

  const errorCategory = useCallback((): void => {
    api.destroy();
    api.error({
      message: '카테고리를 확인하세요.',
      placement: 'topRight',
      duration: 5,
    });
  }, []);

  const errorStart = useCallback((): void => {
    api.destroy();
    api.error({
      message: '시작하는 날짜는 끝나는 날짜와 같거나 이전이어야 합니다.',
      placement: 'topRight',
      duration: 5,
      style: { width: '500px' }
    });
  }, []);

  const errorEnd = useCallback((): void => {
    api.destroy();
    api.error({
      message: '끝나는 날짜는 시작하는 날짜와 같거나 이후이어야 합니다.',
      placement: 'topRight',
      duration: 5,
      style: { width: '500px' }
    });
  }, []);

  const errorOver = useCallback((): void => {
    api.destroy();
    api.error({
      message: '끝나는 날짜는 현재 날짜와 같거나 이전이어야 합니다.',
      placement: 'topRight',
      duration: 5,
      style: { width: '500px' }
    });
  }, []);

  const getLists = async (): Promise<void> => {
    if (keyword === '' || keyword.trim() === '') {
      errorKeyword();
      return;
    }
    if (category === '' || category.trim() === '') {
      errorCategory();
      return;
    }
    try {
      const res = await getNaverLists({
        startDate: startDate,
        endDate: endDate,
        timeUnit: timeUnit,
        category: category,
        keyword: keyword,
        device: device,
        gender: gender,
        ages: age,
      })

      dispatch(setList(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLists();
  }, [startDate, endDate, timeUnit, device, gender, age]);

  return (
    <SearchBarWrapper>
      {contextHolder}
      <SearchBarPCWrapper>
        <DatePickers
          startDate={startDate}
          endDate={endDate}
          errorStart={errorStart}
          errorEnd={errorEnd} 
          errorOver={errorOver}
        />
        <TimeUnitSelect timeUnit={timeUnit} />
        <GenderSelect gender={gender} />
        <DeviceSelect device={device} />
        <AgeSelect age={age} />
        <CategoryInput category={category} />
        <KeywordInput keyword={keyword} getLists={getLists} />
      </SearchBarPCWrapper>
    </SearchBarWrapper>
  );
};