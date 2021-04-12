import axios from 'axios';
import React, {useState} from 'react';
import NewsContext from '../contexts/NewsContext';

const NewsProvider = props => {
  const BASE_URL = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=';
  const API_KEY = '7e2c106905854097b851414c1ca4064d';

  const [news, setNews] = useState([]);

  const getNewsFromApi = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${API_KEY}`);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <NewsContext.Provider value={{news, getnews: getNewsFromApi}}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
