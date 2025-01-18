import React from "react";
import { Card, Row, Col } from "antd"; // Ant Design components
import 'antd/dist/reset.css';

import telescopeImage from "../images/Group@2x.png";
import plane from "../images/plane.png";
import mice from "../images/image 25.png";
import settings from "../images/power-supply 1.png";
import './Cards.css';

const BasicExample = () => {
  return (
    <div className="container">
      <h6 className="category-description">Category</h6>
      <h2 className="main-title">We Offer Best Services</h2>
      <Row gutter={[16, 16]} justify="center">
        {[
          { img: telescopeImage, title: "Calculated Weather", description: "Plan your day with accurate weather updates." },
          { img: plane, title: "Best Flights", description: "Find the best flight deals for your journey." },
          { img: mice, title: "Local Events", description: "Explore local events happening around you." },
          { img: settings, title: "Customization", description: "Personalize your experience with advanced options." },
        ].map((item, index) => (
          <Col xs={24} sm={12} md={6} lg={6} key={index}>
            <Card className="custom-card">
              <div className="image-container">
                <img
                  alt={item.title}
                  src={item.img}
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
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
