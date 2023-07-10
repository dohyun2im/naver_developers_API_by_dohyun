import React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setGender } from '../../store/naverSlice';
import styled from '@emotion/styled';

const CustomSelect = styled(Select)`
  width: 105px;
  margin-right: 10px;
`;

interface Props {
  gender: string;
}

export default function GenderSelect({ gender }: Props) {
  const dispatch = useDispatch();

  const handleSelectGenderChange = (value: any): void => {
    dispatch(setGender(value as string));
  };

  const options = [
    { value: '', label: '전체 성별' },
    { value: 'm', label: '남성' },
    { value: 'f', label: '여성' },
  ];

  return <CustomSelect defaultValue={gender} onChange={handleSelectGenderChange} options={options} />;
}
