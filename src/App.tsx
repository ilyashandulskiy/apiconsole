import React, { useEffect } from 'react';
import Navigation from 'navigation';
import './App.css';
import preloadImages from 'libs/preload-images';
import { observer } from 'mobx-react-lite';

function App() {

  useEffect(() => {
    preloadImages([
      '/images/loader.png'
    ])
  }, [])

  return (
    <Navigation />
  );
}

export default observer(App);
