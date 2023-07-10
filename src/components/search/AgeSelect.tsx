import React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setAge } from '../../slice/naver';
import styled from '@emotion/styled';

const CustomSelect = styled(Select)`
  width: 269px;
  margin-right: 10px;
  .ant-select-selection-item-content {
    font-size: 10px;
    font-weight: bold;
  }
  .ant-select-selection-placeholder {
    color: black;
  }
`;

interface Props {
  age: string[];
}

export default function AgeSelect({ age }: Props) {
  const dispatch = useDispatch();

  const handleSelectAgeChange = (value: any): void => {
    if (value?.length === 6) dispatch(setAge([]));
    else if (typeof value === 'string') dispatch(setAge([value]));
    else dispatch(setAge(value));
  };

  const options = [
    { value: '10', label: '10 ~ 19세' },
    { value: '20', label: '20 ~ 29세' },
    { value: '30', label: '30 ~ 39세' },
    { value: '40', label: '40 ~ 49세' },
    { value: '50', label: '50 ~ 59세' },
    { value: '60', label: '60세 이상' },
  ];

  return (
    <CustomSelect
      mode="multiple"
      value={age}
      placeholder="전체 연령"
      onChange={handleSelectAgeChange}
      options={options}
    />
  );
}
