import React, { useState, useRef, useEffect, } from 'react';
import Chip from './Chip';
import Suggestions from './Suggestions';
import './App.css';

function App() {

  const names: string[] = ['John', 'Alex', 'Alice', 'Eva', 'Leo', 'Cilian', 'Emily', 'Chris', 'Dan'];

  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState(['Michael', 'Steven', 'Sean']);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [backSpaceCount, setBackSpaceCount] = useState(0);

  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
    setSuggestions(names.filter((suggestion) => (
        suggestion.toLowerCase().includes(event.target.value.toLowerCase())
    )))
  };


  useEffect(() => {
    if (backSpaceCount === 1 && inputValue === '' && chips.length > 0) {
      setIsFocused(true);
    }

    if (backSpaceCount === 2 && inputValue === '' && chips.length > 0) {
      setChips((prevChips) => prevChips.slice(0, prevChips.length - 1));
      setBackSpaceCount(0);
      setIsFocused(false);
    }
  }, [backSpaceCount, inputValue, chips]);

  const handleKeyDown = (event: any) => {
    if(event.key === 'Enter' && inputValue !== '') {
      setChips([...chips, inputValue]);
      setInputValue("");
      setSuggestions([]);
      ref?.current?.focus();
      setSuggestions(names)
    }
    if (event.key === 'Backspace') {
      setBackSpaceCount(count => count + 1);
    }
  };


  return (
    <div className="App">
      <div className='chip-container'>
        {chips.map((chip, index) => (
          <div className={`${isFocused ? 'focused' : ''} chip`} key={`${chip}${index}`}>
            <Chip key={chip} chip={chip} chips={chips} setChips={setChips} />
          </div>
        ))}
        <input
          autoFocus
          className='input-field'
          type="text" 
          name="search"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          ref={ref}
        />
      </div>

      <div className='suggestions-container'>
        {suggestions.length > 0 && suggestions.map((suggestion) => (
          <Suggestions
            key={suggestion}
            suggestion={suggestion}
            chips={chips}
            setChips={setChips}
            setSuggestions={setSuggestions}
            setInputValue={setInputValue}
            innerRef={ref}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
