import React from "react";
import { Card, Row, Col } from "antd";
import "antd/dist/reset.css";

// Images
import italyImage from "../images/italy.png";
import london from "../images/destination.jpeg";
import europe from "../images/image.png";

import "./App.css";

const TravelCard = ({ image, place, price, duration, imageId }) => {
  return (
    <Card
      hoverable
      style={{
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      cover={<img alt={place} src={image} id={imageId} />}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3 className="roma">{place}</h3>
          <p className="duration">{duration}</p>
        </div>
        <div>
          <p className="price">{price}</p>
        </div>
      </div>
    </Card>
  );
};

const BasicExample2 = () => {
  return (
    <div className="container">
      <h6 className="category-description">Top Selling</h6>
      <h2 className="main-title">Top Destinations</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Row gutter={[16, 16]} style={{ width: "100%" }}>
          <Col xs={24} sm={12} md={8}>
            <TravelCard
              image={italyImage}
              place="Rome, Italty"
              price="$5,42k"
              duration="10 Days Trip"
              imageId="italy-image"
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <TravelCard
              image={london}
              place="London, UK"
              price="$4.2k"
              duration="12 Days Trip"
              imageId="London-image"
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <TravelCard
              image={europe}
              place="Full Europe"
              price="$15k"
              duration="28 Days Trip"
              imageId="Europe-image"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BasicExample2;
