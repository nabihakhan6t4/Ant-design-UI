import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { Container } from "react-bootstrap";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import traveller from "../images/Traveller 1.png";
import { PlayCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div
      style={{
        padding: "50px 20px",
        borderRadius: "10px",
        background: "#fff1da",
      }}
    >
      <Container>
        <Row gutter={[16, 16]} align="middle" justify="center">
          <Col xs={24} md={12} lg={12}>
            <div style={{ textAlign: "left", zIndex: 1 }}>
              <p
                className="poppins"
                style={{
                  color: "#DF6951",
                  fontSize: "22px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "20px",
                }}
              >
                BEST DESTINATIONS AROUND THE WORLD
              </p>
              <Title
                className="title"
                style={{
                  color: "#181E4B",
                  fontSize: "3.5rem",
                  fontWeight: "700",
                  textShadow: "2px 2px 15px rgba(0,0,0,0.2)",
                  letterSpacing: "-1px",
                  marginBottom: "20px",
                }}
              >
                <span>Travel, Enjoy</span>
                <br />
                <span>and Live a New</span>
                <br />
                <span>and Full Life</span>
              </Title>
              <Paragraph
                className="poppins2"
                style={{
                  color: "#5E6282",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "1.8",
                  maxWidth: "500px",
                  marginBottom: "20px",
                  letterSpacing: "0.5px",
                }}
              >
                Explore the world's most beautiful destinations, experience new
                cultures, and make unforgettable memories. Whether you’re an
                adventure seeker, a nature lover, or a history enthusiast,
                there’s something for everyone.
              </Paragraph>
              <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                <Button
                  className="googleSans"
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#f1a501",
                    borderColor: "#f1a501",
                    fontSize: "18px",
                    fontWeight: "500",
                    textAlign: "center",
                    padding: "26px 30px",
                    boxShadow: "0px 20px 35px 0px #F1A50126",
                    marginBottom: "10px",
                    borderRadius: "10px",
                  }}
                >
                  Find out more
                </Button>
                <Button
                  style={{
                    fontFamily: "Poppins, serif",
                    fontWeight: "400",
                    color: "#686D77",
                    fontSize: "17px",
                    padding: "26px 30px",
                  }}
                >
                  <PlayCircleOutlined
                    style={{
                      fontSize: "24px",
                      background: "#DF6951",
                      color: "#FFFFFF",
                      boxShadow: "0px 15px 30px 0px #DF69514D",
                      marginRight: "10px",
                      borderRadius: "50%",
                    }}
                  />
                  Play more
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={12}>
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
                alt="Hero"
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

export default HeroSection;
