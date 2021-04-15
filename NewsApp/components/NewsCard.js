import React, {useContext} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Badge} from 'react-native-paper';
import NewsContext from '../store/contexts/NewsContext';
import {useNavigation} from '@react-navigation/native';

const NewsCard = props => {
  const navigation = useNavigation();
  const newsContext = useContext(NewsContext);

  const handleDetail = async news => {
    try {
      await newsContext.selectNews(news);
      navigation.navigate('Detail');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ScrollView horizontal={true}>
      {props.news?.map((item, index) => (
        <Pressable key={index} onPress={() => handleDetail(item)}>
          <View
            style={{
              marginTop: 20,
              paddingRight: 10,
              width: 300,
              height: 280,
            }}>
            <Image
              source={{uri: item.urlToImage}}
              style={{width: 280, height: 200, borderRadius: 25}}
            />
            <Text style={{fontSize: 15}}>{item.title}</Text>
            <Badge>{item.source.name}</Badge>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default NewsCard;
