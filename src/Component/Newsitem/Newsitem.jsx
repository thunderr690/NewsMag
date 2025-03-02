import React from "react";
import image from "../../asset/news.jpg"

export const Newsitem = ({ title, description, src, url }) => {
  return (
    
      <div
        className="card  bg-dark text-light mb-3 d-flex my-3 mx-3 px-2 py-2 "
        style={{ maxWidth: "378px" }}
      >
        <img
          src={src?src:image}
          style={{ height: "200px", width: "360px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "This endpoint provides live top and breaking headlines for a country, specific category in a country, single source, or multiple sources. You can also search with keywords. Articles are sorted by the earliest date published first."}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    
  );
};
