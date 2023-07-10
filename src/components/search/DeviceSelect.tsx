import React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setDevice } from '../../slice/naver';
import styled from '@emotion/styled';

const CustomSelect = styled(Select)`
  width: 94.5px;
  margin-right: 10px;
`;

interface Props {
  device: string;
}

export default function DeviceSelect({ device }: Props) {
  const dispatch = useDispatch();

  const handleSelectDeviceChange = (value: any): void => {
    dispatch(setDevice(value as string));
  };

  const options = [
    { value: '', label: '전체 기기' },
    { value: 'pc', label: 'PC' },
    { value: 'mo', label: 'Mobile' },
  ];

  return <CustomSelect defaultValue={device} onChange={handleSelectDeviceChange} options={options} />;
}
