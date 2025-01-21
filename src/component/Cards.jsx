import React from "react";
import { Card, Row, Col } from "antd";
import "antd/dist/reset.css";

import telescopeImage from "../images/Group 48.png";
import plane from "../images/Group 51.png";
import mice from "../images/Group 50.png";
import settings from "../images/Group 49.png";
import "./App.css";

const serviceData = [
  {
    img: telescopeImage,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    img: plane,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    img: mice,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    img: settings,
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
  },
];

const BasicExample = () => {
  return (
    <div className="container">
      <h6 className="category-description">CATEGORY</h6>
      <h2 className="main-title">We Offer Best Services</h2>
      <Row gutter={[16, 16]} justify="center">
        {serviceData.map((item, index) => (
          <Col xs={24} sm={12} md={6} lg={6} key={index}>
            <Card className="custom-card">
              <div className="image-container">
                <img alt={item.title} src={item.img} className="card-image" />
              </div>
              <div className="card-content">
                <h3
                  className={`card-title ${
                    index % 2 === 0 ? "even-title" : "odd-title"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="card-description">{item.description}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BasicExample;
