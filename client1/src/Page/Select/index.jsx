import React from 'react';
import { Select, SelectItem, SelectSection } from '@nextui-org/react';
import { animals } from './data';

export default function Option({  selectPlace }) {
  const handleSelectChange = (selectedValue) => {
    // Use setselecItem to update the state with the selected value
    selectPlace(selectedValue.target.value);
  };

  return (
    <Select
      label='Địa Điểm'
      placeholder=''
      className='max-w-xs'
      onChange={handleSelectChange} // Attach the onChange handler
    >
      <SelectSection showDivider title='Tất cả địa điểm'>
        <SelectItem key='all'>Tất cả địa điểm</SelectItem>
        <SelectItem key='Đà Nẵng'>Đà Nẵng</SelectItem>
        <SelectItem key='Hồ Chí Minh'>Hồ Chí Minh</SelectItem>
        <SelectItem key='Hà Nội'>Hà Nội</SelectItem>
      </SelectSection>
    </Select>
  );
}
