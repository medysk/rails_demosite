import React, { useEffect } from 'react';

const Home = (): JSX.Element => {
  useEffect(() => {
    document.title = 'RailsTest - Home';
  }, []);

  return <h1>HOME</h1>;
};

export default Home;
