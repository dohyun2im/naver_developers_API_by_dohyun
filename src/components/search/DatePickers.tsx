import React from 'react';
import { DatePicker, DatePickerProps } from 'antd';
import { useDispatch } from 'react-redux';
import { setStart, setEnd } from '../../slice/naver';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const CustomDatePicker = styled(DatePicker)`
  width: 115px;
  margin-right: 10px;
`;

interface Props {
  startDate: string;
  endDate: string;
  errorStart: () => void;
  errorEnd: () => void;
  errorOver: () => void;
}

export default function DatePickes({ startDate, endDate, errorStart, errorEnd, errorOver }: Props) {
  const dispatch = useDispatch();

  const handlePickStartDate: DatePickerProps['onChange'] = (date: any, dateString: string): void => {
    if (new Date(dateString) > new Date(endDate)) {
      errorStart();
      return;
    }
    if (dateString === '') dispatch(setStart(dayjs('2023-01-01').format('YYYY-MM-DD')));
    else dispatch(setStart(dateString));
  };

  const handlePickEndDate: DatePickerProps['onChange'] = (date: any, dateString: string): void => {
    if (new Date(dateString) > new Date(dayjs().format('YYYY-MM-DD'))) {
      errorOver();
      return;
    }
    if (new Date(dateString) < new Date(startDate)) {
      errorEnd();
      return;
    }
    if (dateString === '') dispatch(setEnd(dayjs().format('YYYY-MM-DD')));
    else dispatch(setEnd(dateString));
  };

  return (
    <>
      <CustomDatePicker
        value={dayjs(startDate)}
        placeholder="StartDate"
        onChange={handlePickStartDate}
      />
      <CustomDatePicker
        value={dayjs(endDate)}
        placeholder="EndDate"
        onChange={handlePickEndDate}
      />
    </>
  );
};