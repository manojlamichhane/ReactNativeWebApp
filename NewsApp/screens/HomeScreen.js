import React, {useEffect, useState, useContext} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import NewsCard from '../components/NewsCard';
import {Badge} from 'react-native-paper';
import NewsContext from '../store/contexts/NewsContext';
import SplashScreen from '../components/SplashScreen';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [recentNews, setRecentNews] = useState([]);
  const [newsSources, setNewsSources] = useState([]);

  const newsContext = useContext(NewsContext);

  useEffect(async () => {
    try {
      await newsContext.getNewsFromApi();
      await newsContext.getRecentNewsFromApi();
      await newsContext.getSources();
      setNews(newsContext.news);
      setRecentNews(newsContext.recentNews);
      setNewsSources(newsContext.sources);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [news.recentNews, newsSources]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <ScrollView>
      <View style={{padding: 20, backgroundColor: 'white'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          MONDAY, APRIL 13
        </Text>
        <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>
          Top News
        </Text>
        <NewsCard news={news} />
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
          Recent News
        </Text>
        <NewsCard news={recentNews} />
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
          Our Sources
        </Text>
        <ScrollView horizontal={true}>
          {newsSources?.map((item, index) => (
            <View key={index} style={{marginVertical: 30, marginRight: 20}}>
              <Badge size={40}>{item.name}</Badge>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
