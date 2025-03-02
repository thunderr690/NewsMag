import React, { useEffect, useState } from "react";
import { Newsitem } from "../Newsitem/Newsitem";

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        console.log(articles);
      });

    console.log(articles);
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-evenly">
        {articles.map((news, index) => 
           (
            <div className=" ">
              <Newsitem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
