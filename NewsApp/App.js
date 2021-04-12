import 'react-native-gesture-handler';
import React, {useEffect, useContext} from 'react';
import MainNavigator from './navigation/MainNavigator';
import NewsProvider from './store/providers/NewsProvider';
import NewsContext from './store/contexts/NewsContext';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  const newsContext = useContext(NewsContext);

  console.log(newsContext);

  // useEffect( () => {

  // }, []);

  return (
    <NewsProvider>
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    </NewsProvider>
  );
};

export default App;
