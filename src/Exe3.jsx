//create a react component which will accept the string input
// a soon as user  input changes, it should show
// total character count , words , vowel , consonant and special characters


import React, { useState } from 'react';

const CharacterCounter = () => {
  const [inputText, setInputText] = useState('');

  const countCharacters = (text) => {
    const characterCount = text.length;
    const wordCount = text.split(/\s+/).filter((word) => word !== '').length;
    const vowelCount = text.match(/[aeiou]/gi) ? text.match(/[aeiou]/gi).length : 0;
    const consonantCount = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)
      ? text.match(/[bcdfghjklmnpqrstvwxyz]/gi).length
      : 0;
    const specialCharacterCount = text.match(/[^a-zA-Z0-9\s]/g) ? text.match(/[^a-zA-Z0-9\s]/g).length : 0;

    return {
      characterCount,
      wordCount,
      vowelCount,
      consonantCount,
      specialCharacterCount,
    };
  };

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
  };

  const {
    characterCount,
    wordCount,
    vowelCount,
    consonantCount,
    specialCharacterCount,
  } = countCharacters(inputText);

  return (
    <div>
      <textarea
        placeholder="Type something..."
        value={inputText}
        onChange={handleInputChange}
      />
      <div>
        <p>Total Characters: {characterCount}</p>
        <p>Total Words: {wordCount}</p>
        <p>Total Vowels: {vowelCount}</p>
        <p>Total Consonants: {consonantCount}</p>
        <p>Total Special Characters: {specialCharacterCount}</p>
      </div>
    </div>
  );
};

export default CharacterCounter;
