import { regExpForStr, regExpForSentencesArr } from '../constants';

const normalizeText = text => text
  .toLowerCase()
  .replace(regExpForStr, '');

export const isPalindrome = text => {
  const normalizedText = normalizeText(text);
  for (let i = 0; i < normalizedText.length / 2; i++) {
    if (normalizedText[i] !== normalizedText[normalizedText.length - 1 - i]) return false
  }
  return true
};

// Restoring changed characters after normalization from the original string
export const getSentencesArr = text => {
  const sentencesArr = text
    .replace(regExpForSentencesArr, '.')
    .split('.');
  const separators = sentencesArr.reduce((separatorsAcc, sentence) => {
    separatorsAcc.count += sentence.length;
    separatorsAcc.arr.push(text[separatorsAcc.count]);
    separatorsAcc.count += 1;
    return separatorsAcc
  }, { arr: [], count: 0 });
  return [sentencesArr, separators.arr]
};