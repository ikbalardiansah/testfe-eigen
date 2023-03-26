import React from "react";
import { Row } from "react-bootstrap";

export const NewsItem = ({
  title,
  description,
  url,
  urlToImage,
}: {
  title: any;
  description: any;
  url: any;
  urlToImage: any;
}) => {
  return (
    <div>
      <Row className="text-center">
        <img src={urlToImage} alt="newsimage" />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </Row>
    </div>
  );
};
