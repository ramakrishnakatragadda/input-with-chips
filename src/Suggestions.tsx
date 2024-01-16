import React from 'react';
import './App.css';
import KT from './images/KT.jpg';

type SuggestionsProps = {
  key: string,
  suggestion: string,
  chips: string[],
  setChips: React.Dispatch<React.SetStateAction<string[]>>,
  setSuggestions: React.Dispatch<React.SetStateAction<string[]>>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  innerRef:React.RefObject<HTMLInputElement>
};

const Suggestions: React.FC<SuggestionsProps> = ({suggestion, chips, setChips, setSuggestions, setInputValue, innerRef}) => {

  const handleSuggestionClick = (suggestion: any) => {
    setChips([...chips, suggestion]);
    setSuggestions([]);
    setInputValue("");
    innerRef?.current?.focus();
  };

  return (
    <button className='suggestion-chip-wrapper' onClick={() => handleSuggestionClick(suggestion)}>
      <img src={KT} alt="Profile" className='profile'/>
      <span className='suggestion-chip'>{suggestion}</span>
      <span className='email'>cilianmurphy@gmail.com</span>
    </button>
  )
}

export default Suggestions