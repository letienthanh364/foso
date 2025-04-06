interface splitStringToArrayProps {
  inputString: string;
  limit?: number;
}
const splitStringToArray = ({
  inputString,
  limit = 6,
}: splitStringToArrayProps): string[] => {
  const result: string[] = [];
  const words = inputString.split(" ");

  let currentChunk = "";
  let wordCount = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const nextWord = words[i + 1];

    // Calculate length if next word is added
    let nextChunk = "";
    if (currentChunk.length > 0) {
      nextChunk = currentChunk + " " + word;
    } else {
      nextChunk = word;
    }

    // Check if adding this word will exceed the limit and wordCount == 2
    if (wordCount === 2 && nextChunk.length > limit) {
      // Add current chunk to results
      result.push(currentChunk);
      // Start new chunk with current word
      currentChunk = word;
      wordCount = 1;
      continue;
    }

    // Add word to current chunk
    currentChunk = nextChunk;
    wordCount++;

    // Check if current chunk length equals limit
    if (currentChunk.length === limit) {
      result.push(currentChunk);
      currentChunk = "";
      wordCount = 0;
      continue;
    }

    // If next word would make chunk exceed limit
    if (nextWord && wordCount < 3) {
      const potentialChunk = currentChunk + " " + nextWord;
      if (potentialChunk.length > limit) {
        result.push(currentChunk);
        currentChunk = "";
        wordCount = 0;
        continue;
      }
    }

    // If maximum of 3 words is reached
    if (wordCount === 3) {
      result.push(currentChunk);
      currentChunk = "";
      wordCount = 0;
    }
  }

  // Add the last chunk if there is any
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

const Utils_String = {
  splitStringToArray,
};

export default Utils_String;
