import axios from 'axios';
import React, {useState} from 'react';
import NewsContext from '../contexts/NewsContext';

const NewsProvider = props => {
  const BASE_URL = 'https://newsapi.org/v2/';
  const API_KEY = '7e2c106905854097b851414c1ca4064d';

  const [news, setNews] = useState([]);
  const [recentNews, setRecentNews] = useState([]);
  const [sources, setSources] = useState([]);
  const [selectedNews, setSelectedNews] = useState({});

  const getNewsFromApi = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}everything?q=bitcoin&apiKey=${API_KEY}`,
      );
      setNews(response.data.articles);
    } catch (e) {
      console.log(e);
    }
  };
  const getRecentNewsFromApi = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}top-headlines?country=us&apiKey=${API_KEY}`,
      );
      setRecentNews(response.data.articles);
    } catch (e) {
      console.log(e);
    }
  };
  const getSources = async () => {
    try {
      const response = await axios.get(`${BASE_URL}sources?apiKey=${API_KEY}`);
      setSources(response.data.sources);
    } catch (e) {
      console.log(e);
    }
  };

  const selectNews = news => {
    setSelectedNews(news);
  };

  return (
    <NewsContext.Provider
      value={{
        sources,
        recentNews,
        news,
        selectedNews,
        selectNews,
        getNewsFromApi,
        getRecentNewsFromApi,
        getSources,
      }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
