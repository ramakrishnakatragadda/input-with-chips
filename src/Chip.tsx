import React from 'react'
import './App.css';

type ChipProps = {
  chip: string,
  chips: string[],
  setChips: React.Dispatch<React.SetStateAction<string[]>>,
};

const Chip: React.FC<ChipProps> = ({chip, chips, setChips}) => {

  const handleRemoveChip = (chip: any) => {
    setChips(chips.filter(c => c !== chip));
  };

  return (
    <>
      <span>{chip}</span>
      <button
        className='remove-chip-btn'
        onClick={() => handleRemoveChip(chip)}
      >
        X
      </button>
    </>
  )
}

export default Chip