import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const CateoryScreen = () => {
  const City = [
    'Hetauda',
    'kathmandu',
    'dharan',
    'butwal',
    'birgunj',
    'chitwan',
  ];
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Categories</Text>
      <View>
        <ScrollView>
          {City?.map((item, index) => (
            <View
              key={index}
              style={{
                margin: 20,
                width: '88%',
                height: 130,
                borderRadius: 25,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 30,
                marginRight: 20,
              }}>
              <Text>{item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* {City &&
          City.map((item, index) => {
            console.log(item);
            <View
              key={index}
              style={{
                width: 150,
                height: 150,
                borderRadius: 25,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{item}</Text>
            </View>;
          })} */}
      </View>
    </View>
  );
};

export default CateoryScreen;
