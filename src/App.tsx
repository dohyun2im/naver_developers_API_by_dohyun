import React from 'react';
import CustomHeader from './components/Header';
import ColorMultiLineChart from './components/ColorMultiLineChart';
import SearchBar from './components/search/SearchBar';

export default function App() {


  return (
    <>
      <CustomHeader />
      <SearchBar />
      <ColorMultiLineChart />
    </>
  );
}
