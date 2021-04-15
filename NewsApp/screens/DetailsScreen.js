import React, {useContext, useEffect, useState} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import NewsContext from '../store/contexts/NewsContext';
import {Badge, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';
import SplashScreen from '../components/SplashScreen';

const DetailsScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const newsContext = useContext(NewsContext);
  const [news, setNews] = useState({});
  const navigation = useNavigation();

  useEffect(async () => {
    try {
      await setNews(newsContext.selectedNews);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.63}}>
        <ImageBackground
          source={{uri: news && news.urlToImage}}
          style={{width: '100%', height: 347, opacity: 0.7}}>
          <Icon
            onPress={() => navigation.navigate('Home')}
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
            }}
            name="chevron-back"
            size={30}
            color="black"
          />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              position: 'absolute',
              bottom: 26,
              padding: 20,
            }}>
            {news && news.title}
          </Text>
          <View style={{position: 'absolute', top: 10, right: 10}}>
            <Badge style={{backgroundColor: 'white'}} size={40}>
              {news.source && news.source.name}
            </Badge>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 0.8,
          backgroundColor: 'white',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <View style={{flexDirection: 'row', padding: 20}}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#626667',
            }}></View>
          <View>
            <Text style={{marginLeft: 10, fontSize: 18}}>{news.author}</Text>
            <Text style={{marginLeft: 10, fontSize: 12, color: '#626667'}}>
              {news.publishedAt && news.publishedAt.slice(0, 10)}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={{fontSize: 18, color: '#626667'}}>
            {news && news.description}
          </Text>
          <Button
            style={{backgroundColor: 'white', marginVertical: 35}}
            mode="contained"
            onPress={() => Linking.openURL(news.url)}>
            Read more
          </Button>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
