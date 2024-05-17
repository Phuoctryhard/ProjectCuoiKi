import React from 'react';
import { Select, SelectItem, SelectSection } from '@nextui-org/react';
import { animals } from './data';

export default function Option({  setselectLuong }) {
  const handleSelectChange = (selectedValue) => {
    // Use setselecItem to update the state with the selected value
    setselectLuong(selectedValue.target.value);
  };
  return (
    <Select
      label='Lương'
      placeholder=''
      className='max-w-xs'
      onChange={handleSelectChange} // Attach the onChange handler
    >
      <SelectSection showDivider title='Tất cả lương'>
        <SelectItem key='all'>Tất cả các lương</SelectItem>
        <SelectItem key='10-15'>10-15 triệu</SelectItem>
        <SelectItem key='15-25'>15-25 triệu</SelectItem>
        <SelectItem key='trên 25'>Trên 25 triệu triệu</SelectItem>
      </SelectSection>
    </Select>
  );
}
