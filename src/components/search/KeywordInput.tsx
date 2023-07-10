import React from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setKeyword } from '../../store/naverSlice';
import styled from '@emotion/styled';

const CustomInput = styled(Input.Search)`
  width: 200px;
`;

interface Props {
  keyword: string;
  getLists: () => void;
}

export default function KeywordInput({ keyword, getLists }: Props) {
  const dispatch = useDispatch();

  const handleKeywordOnChange = (e: any): void => {
    dispatch(setKeyword(e.target.value as string));
  };

  return (
    <CustomInput
      placeholder="키워드"
      value={keyword}
      addonBefore="키워드: "
      onChange={handleKeywordOnChange}
      onPressEnter={getLists}
      onSearch={getLists}
    />
  );
}
