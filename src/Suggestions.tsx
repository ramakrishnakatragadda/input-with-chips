import React from 'react';
import './App.css';

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
    <div className='suggestion-chip-wrapper'>
      <button onClick={() => handleSuggestionClick(suggestion)} className='suggestion-chip' >{suggestion}</button>
    </div>
  )
}

export default Suggestions