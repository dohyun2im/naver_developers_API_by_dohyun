import styled from '@emotion/styled';
import React from 'react';

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: start;
  align-items: center;
  vertical-align: middle;
  border-bottom: 2px solid #d6d6d6;
  padding-left: 20px;
  margin-bottom: 10px;
`;

const HeaderColorText = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: #1dc800;
  margin-right: 10px;
`;

const HeaderText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: gray;
  margin-right: 5px;
`;

function CustomHeader() {
  return (
    <HeaderWrapper>
      <HeaderColorText>Naver</HeaderColorText>
      <HeaderText>Developers Shopping API</HeaderText>
    </HeaderWrapper>
  );
}

export default React.memo(CustomHeader);
