import React, { useState } from "react";

const Data = () => {
  const [fetchData, setFetchData] = useState([]);
  const [topic, setTopic] = useState("");
  const handleData = async () => {
    // console.log(topic);
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=2024-09-09&sortBy=publishedAt&apiKey=946af39d9d57464fb508cd684e603dcd`
    );
    let info = await response.json();
    setFetchData(info.articles);
    console.log(info.articles[1].urlToImage);
  };

  const handleInput = (e) => {
    setTopic(e.target.value);
  };

  return (
    <>
      <div className="navbar-container">
        <input
          className="search-input"
          onChange={handleInput}
          value={topic}
          type="text"
          placeholder="Search Topic"
        />
        <button className="get-data-btn" onClick={handleData}>
          Get Data
        </button>
      </div>

      <div className="card-container">
        {fetchData.length > 0 ? (
          fetchData.map((article, index) => (
            <div className="card-container-inner" key={article.id}>
              <p>
                <img
                  src={article.urlToImage}
                  alt="random image"
                  style={{ width: "300px", height: "300px" }}
                />
              </p>
              <p>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p>
                  <strong>Source:</strong>
                  {article.source.name}
                </p>
                <a href={article.url} target="blank" rel="noreference">
                  Read More
                </a>
              </p>
            </div>
          ))
        ) : (
          <p>No articles found</p>
        )}
      </div>
    </>
  );
};

export default Data;
