import React from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { animals } from './data'

export default function App({vitri,setVitri}) {
  // const [values, setValues] = React.useState(new Set(['tatcaapbac']));
  const handleSelectionChange = (selectedValues) => {
    // setVitri(new Set(selectedValues));

    // Convert the Set to an array before using or logging it
    const selectedArray = Array.from(selectedValues);

    // Access the selected values here and do something with them
    console.log('Selected Values:', selectedArray);

    // If you want to pass them to a function, you can do something like:
    // setVitri(new Set(selectedArray));'
    setVitri(selectedArray);
  }

  return (
    <div className='flex w-full max-w-xs flex-col gap-2'>
      <Select
        label='Cấp Bậc'
        selectionMode='multiple'
        placeholder='Select an position'
        selectedKeys={vitri}
        className='max-w-xs'
        onSelectionChange={handleSelectionChange}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
      </div>
  )
}
 // <p className='text-small text-default-500'>Selected: {Array.from(values).join(', ')}</p>

