import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const texts = [
  { text: 'Hello, my name is' },
  { text: 'こんにちは、私の名前は' },
  { text: 'Ciao, il mio nome è' },
  { text: 'Bonjour, mon nom est' },
  { text: 'Hola, mi nombre es' },
];

const TypeWriter = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(125);
  const [deletingSpeed, setDeletingSpeed] = useState(125);
  const [pauseTime, setPauseTime] = useState(3000);

  const sentenceRef = useRef(null);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => {
      clearTimeout(intervalId);
    };
  }, [currentText, isDeleting, typingSpeed]);

  const handleTyping = () => {
    const fullText = texts[textIndex].text;

    if (isDeleting) {
      setCurrentText(fullText.substring(0, currentText.length - 1));
      setDeletingSpeed(100);

      if (currentText === '') {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
        setPauseTime(3000);
      }
    } else {
      setCurrentText(fullText.substring(0, currentText.length + 1));

      if (currentText === fullText) {
        console.log('currentText === fullText')
        setIsDeleting(true);
        setPauseTime(3000);
      }
    }

    setTypingSpeed(125);
  };

  return (
    <div>
      <p className="h-8 text-lg font-thin">
        <span ref={sentenceRef}>{currentText}</span>
        <span className="cursor"></span>
      </p>
    </div>
  );
};

export default TypeWriter;