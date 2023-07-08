import React from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../slice/naver';
import styled from '@emotion/styled';

const CustomInput = styled(Input)`
  width: 168px;
  margin-right: 10px;
`;

interface Props {
  category: string;
}

export default function CategoryInput({ category }:Props) {
  const dispatch = useDispatch();

  const handleCategoryOnChange = (e: any): void => {
    dispatch(setCategory(e.target.value as string));
  };

  return (
    <CustomInput
        placeholder="카테고리"
        addonBefore="카테고리: "
        value={category}
        onChange={handleCategoryOnChange}
    />
  );
};