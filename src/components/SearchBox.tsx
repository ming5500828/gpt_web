import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchBox.less';

const SearchBox = ({ onSearch }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="custom-search">
      <Input
        className="custom-input"
        placeholder="搜索场景"
        prefix={<SearchOutlined />}
        onSearch={onSearch}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBox;