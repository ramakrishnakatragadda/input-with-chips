import React from 'react'
import './App.css';
import SVG from './images/svg.svg';
import KT from './images/KT.jpg';

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
    <div className='chipContainer'>
      <img src={KT} alt="Profile" className='profile'/>
      <span>{chip}</span>
      <button
        className='remove-chip-btn'
        onClick={() => handleRemoveChip(chip)}
      >
      <img src={SVG} alt="remove chip" className='svg' />
      </button>
    </div>
  )
}

export default Chip