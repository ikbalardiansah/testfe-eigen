import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsItem } from "./NewsItem";

export const NewsList = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6d7dcf3a4f0b484daf108d660c7a1664"
      );
      setNews(res.data.articles);
      //   console.log(res);
    };
    getNews();
  });

  return (
    <div>
      {news.map(({ title, description, url, urlToImage }) => (
        <NewsItem
          title={title}
          description={description}
          url={url}
          urlToImage={urlToImage}
        />
      ))}
    </div>
  );
};
