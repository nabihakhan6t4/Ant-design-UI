import React from "react";
import { Col, Row, Typography, Divider } from "antd";
import { Container } from "react-bootstrap";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import firstIcon from "../images/Rectangle 21.png";
import traveller from "../images/Traveller 1.png";

const { Title, Paragraph } = Typography;

const TripSection = () => {
  return (
    <div
      style={{
        padding: "50px 20px",
        borderRadius: "10px",
      }}
    >
      <Container>
        <Row gutter={[16, 16]} align="middle" justify="center">
          {/* Row 1 */}
          <Col xs={24} md={8}>
            <div
              style={{
                textAlign: "left",
                zIndex: 1,
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 20px 30px rgba(0,0,0,0.1)",
              }}
            >
              <img src={firstIcon} alt="first icon" width={'30px'} />
              <Title
                style={{
                  color: "#181E4B",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Book Your Trip
              </Title>
              <Paragraph style={{ color: "#5E6282", fontSize: "16px" }}>
                Discover amazing places with our quick and easy booking process. 
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={16}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0px 20px 30px rgba(0,0,0,0.15)",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <img
                src={traveller}
                alt="traveller"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
          </Col>
        </Row>
        <Divider />
        {/* Row 2 */}
        <Row gutter={[16, 16]} align="middle" justify="center">
          <Col xs={24} md={8}>
            <div
              style={{
                textAlign: "left",
                zIndex: 1,
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 20px 30px rgba(0,0,0,0.1)",
              }}
            >
              <img src={firstIcon} alt="first icon" width={'30px'} />
              <Title
                style={{
                  color: "#181E4B",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Your Adventure
              </Title>
              <Paragraph style={{ color: "#5E6282", fontSize: "16px" }}>
                Choose your destination and start your adventure today. Our services are hassle-free.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={16}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0px 20px 30px rgba(0,0,0,0.15)",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <img
                src={traveller}
                alt="traveller"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
          </Col>
        </Row>
        <Divider />
        {/* Row 3 */}
        <Row gutter={[16, 16]} align="middle" justify="center">
          <Col xs={24} md={8}>
            <div
              style={{
                textAlign: "left",
                zIndex: 1,
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 20px 30px rgba(0,0,0,0.1)",
              }}
            >
              <img src={firstIcon} alt="first icon" width={'30px'} />
              <Title
                style={{
                  color: "#181E4B",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Enjoy Your Stay
              </Title>
              <Paragraph style={{ color: "#5E6282", fontSize: "16px" }}>
                Relax and enjoy your trip with all the amenities we offer.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={16}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0px 20px 30px rgba(0,0,0,0.15)",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <img
                src={traveller}
                alt="traveller"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TripSection;
