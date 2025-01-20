import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { Container } from "react-bootstrap";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import traveller from "../images/Traveller 1.png";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div>
      <Container>
        <Row gutter={[16, 16]} align="middle" justify="center">
          <Col xs={24} md={12}>
            <div style={{ textAlign: "left" }}>
              <p
                className="poppins"
                style={{
                  color: " #DF6951",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                BEST DESTINATIONS AROUND THE WORLD
              </p>
              <Title
                className="title"
                style={{
                  color: "#181E4B",
                  fontSize: "84px",
                  fontWeight: "700",
                }}
              >
                <span>Travel, enjoy</span>
                <br />
                <span>and live a new</span>
                <br />
                <span>and full life</span>
              </Title>
              <Paragraph
                className="poppins2"
                style={{
                  color: " #5E6282",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Explore the world's most beautiful destinations, experience new
                cultures, and make unforgettable memories. Whether you’re an
                adventure seeker, a nature lover, or a history enthusiast,
                there’s something for everyone.
              </Paragraph>
              <div className="d-flex align-items-center gap-3">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: "#f1a501",
                    borderColor: "#f1a501",
                    fontSize: "18px",
                    fontWeight: "500",
                    textAlign: "center",
                    padding: "26px 30px",
                    boxShadow: "0px 20px 35px 0px #F1A50126",
                    marginRight: "10px",
                    borderRadius: "10px",
                  }}
                >
                  Find out more
                </Button>
                <Button></Button>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <img
              src={traveller}
              alt="Hero"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
