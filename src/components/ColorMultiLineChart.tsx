import React, { useEffect, useState } from 'react';
import { Line } from '@ant-design/plots';
import { Result } from 'antd';
import { useSelector } from 'react-redux';
import { ListData } from '../slice/naver';
import styled from '@emotion/styled';

const ChartWrapper = styled.div`
  padding: 20px;
`;

export default function ColorMultiLineChart() {
  const { list } = useSelector((state: any) => state.naver);
  const [data, setData] = useState<ListData[]>([]);

  useEffect(() => {
    setData(
      list.reduce((result: ListData[], listItem: ListData) => {
        if (listItem.group === "60") {
          const modifiedItem = { ...listItem, group: listItem.group + '대 이상' };
          result.push(modifiedItem);
        }
        else {
          const modifiedItem = { ...listItem, group: listItem.group + '대' };
          result.push(modifiedItem);
        }
        return result;
      }, [])
    );
  }, [list]);

  const COLOR_PLATE_6 = [
    '#5B8FF9',
    '#5AD8A6',
    '#5D7092',
    '#F6BD16',
    '#E8684A',
    '#6DC8EC',
  ];

  const config = {
    data,
    xField: 'period',
    yField: 'ratio',
    seriesField: 'group',
    color: COLOR_PLATE_6,
  };

  return (
  <ChartWrapper>
    {
      list?.length >= 1 ?
      <Line {...config} />
      :
      <Result
        status="500"
        title="카테고리와 키워드를 확인 해주세요."
      />
    }
  </ChartWrapper>
  );
}
