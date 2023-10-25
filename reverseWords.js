function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Reverse each word and join them back into a sentence
    const reversedSentence = words.map(word => word.split('').reverse().join('')).join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = "Hello, World!";
  const reversed = reverseWords(inputSentence);
  console.log(reversed);