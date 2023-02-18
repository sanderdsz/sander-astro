import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const texts = [
  { text: 'Hello, my name is' },
  { text: 'こんにちは、私の名前は' },
  { text: 'Ciao, il mio nome è' },
  { text: 'Bonjour, mon nom est' },
  { text: 'Hola, mi nombre es' }
];

const Typewriter2 = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  function waitForMs(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    )
  }

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const currentText = texts[currentTextIndex].text;

      if (!isDeleting) {
        setText(currentText.substring(0, currentLetterIndex + 1));
        setCurrentLetterIndex(currentLetterIndex + 1);
        if (currentLetterIndex + 1 === currentText.length) {
          setIsDeleting(true);
          clearInterval(intervalId);
          console.log(`aqi`)
          await waitForMs(1000)
        }
      } else {
        setText(currentText.substring(0, currentLetterIndex - 1));
        setCurrentLetterIndex(currentLetterIndex - 1);
        if (currentLetterIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, 125);

    return () => clearInterval(intervalId);
  }, [currentLetterIndex, currentTextIndex, isDeleting]);

  return (
    <div>
      <p className="h-8 text-lg font-thin">
        <span id="sentence">{text}</span>
        <span className="cursor"></span>
      </p>
    </div>
  );
};

export default Typewriter2;