import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';

const mainText = 'Golf is waiting for you!';

const MainPage = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = animateText(mainText, index, setText, setIndex);
    return () => clearTimeout(id);
  }, [index]);

  return <PageTitle content={`New VW ${text}`} />;
};

function animateText(text, index, setText, setIndex) {
  const id = setTimeout(() => {
    if (index !== text.length) {
      setText(prev => `${prev}${text[index]}`);
      setIndex(prev => prev + 1);
    } else {
      return;
    }
  }, 100);
  return id;
}

export default MainPage;
