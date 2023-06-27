import React, { useState, useEffect } from 'react';
import { Category, Videos } from './';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('웹스토리보이');
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetch('./utils/test.json')
      .then((response) => response.json())
      .then((result) => {
        console.log(result.items);
        setvideos(result.items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main id="main">
      <aside id="asdie">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory} 유튜버</h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;
