import React, { useState } from 'react'
import { CssBaseline, Container } from '@material-ui/core'

import { isPalindrome, getSentencesArr } from '../utils'
import ButtonsBlock from '../components/PalindromeForm/ButtonsBlock'
import InputBlock from '../components/PalindromeForm/InputBlock'
import ResultBlock from '../components/PalindromeForm/ResultBlock'
import {regExpForSentence} from "../constants";

const wrapWordPalindromes = (sentence, setIfLonger) => sentence
  .split(' ')
  .map(word => isPalindrome(word) ? setIfLonger(word) || (
    <span key={word}>
      {' '}<mark>{word}</mark>
    </span>
  ) : (
    <span key={word}>
      {' '}{word}
    </span>
  ));

const markPalindromes = (() => {
  let longestPalindrome = '';
  const setIfLonger = text => { text.length > longestPalindrome.length && (longestPalindrome = text) };

  return (importedText, selLongestPalindrome) => {
    const [sentencesArr, separators] = getSentencesArr(importedText);
    return sentencesArr.map((sentence, i, arr) => {
      const isSentencePalindrome = isPalindrome(sentence.replace(regExpForSentence, ''));
      isSentencePalindrome && setIfLonger(sentence);
      if (i === arr.length -1) selLongestPalindrome(longestPalindrome) || (longestPalindrome = ''); // cleaning cause of storing longestPalindrome in closure to make updating possible when changing text
      return isSentencePalindrome
        ? [' ', <mark key={sentence}>{sentence}</mark>, separators[i]]
        : [wrapWordPalindromes(sentence, setIfLonger), separators[i]]
    });
  };
})();

const FindPalindromeForm = () => {
  const [importedText, setImportedText] = useState("");
  const [resultText, setResultText] = useState([]);
  const [longestPalindrome, setLongestPalindrome] = useState("");

  const handleChange = event => setImportedText(event.target.value);

  const handleImport = event => {
    const fileList = event.currentTarget.files;
    const reader = new FileReader();
    reader.onload = () => setImportedText(reader.result); //onload the function only works on the first file download
    if (fileList.length > 0) reader.readAsText(fileList[0]);
  };

  const handleClear = () => {
    setImportedText("");
    setLongestPalindrome("");
    setResultText("");
  };

  const findPalindromes = () => {
    if (importedText.length === 0) return;
    setResultText(markPalindromes(importedText, setLongestPalindrome));
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <ButtonsBlock
        handleImport={handleImport}
        findPalindromes={findPalindromes}
        handleClear={handleClear}
      />
      <InputBlock
        handleChange={handleChange}
        importedText={importedText}
      />
      <ResultBlock
        resultText={resultText}
        longestPalindrome={longestPalindrome}
      />
    </Container>
  );
};

export default FindPalindromeForm