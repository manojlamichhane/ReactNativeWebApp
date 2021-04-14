import 'react-native-gesture-handler';
import React, {useEffect, useContext} from 'react';
import MainNavigator from './navigation/MainNavigator';
import NewsProvider from './store/providers/NewsProvider';
import {Provider as PaperProvider} from 'react-native-paper';
import NewsContext from './store/contexts/NewsContext';

const App = () => {
  const newsContext = useContext(NewsContext);

  useEffect(async () => {
    try {
      await newsContext.getNewsFromApi();
      console.log(newsContext.news);
    } catch (e) {
      console.log(e);
    }
  });
  return (
    <PaperProvider>
      <NewsProvider>
        <MainNavigator />
      </NewsProvider>
    </PaperProvider>
  );
};

export default App;
