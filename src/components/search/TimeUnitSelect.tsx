import React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setTimeUnit } from '../../slice/naver';
import styled from '@emotion/styled';

const CustomSelect = styled(Select)`
  width: 67px;
  margin-right: 10px;
`;

interface Props {
  timeUnit: string;
}

export default function TimeUnitSelect({ timeUnit }: Props) {
  const dispatch = useDispatch();

  const handleSelectTimeUnitChange = (value: any): void => {
    dispatch(setTimeUnit(value as string));
  };

  const options = [
    { value: 'date', label: '일간' },
    { value: 'week', label: '주간' },
    { value: 'month', label: '월간' },
  ];

  return (
    <CustomSelect
      value={timeUnit}
      onChange={handleSelectTimeUnitChange}
      options={options}
    />
  );
};