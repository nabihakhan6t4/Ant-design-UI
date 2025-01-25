import React from "react";
import { Layout, Input, Button, Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}>
      <Row gutter={[16, 16]} justify="center">
        {/* Subscription Section */}
        <Col span={24} style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2
            style={{
              fontFamily: "Poppins, serif",
              fontWeight: "600",
              fontSize: "33px",
              textAlign: "center",
              color: "#14183E",
            }}
          >
            <span>Subscribe to get information, latest news and other</span>
            <br />
            <span>interesting offers about Jadoo</span>
          </h2>
          <div style={{ display: "inline-flex", gap: "8px" }}>
            <Input
              className="custom-placeholder"
              placeholder="Your email"
              style={{
                border: "1px solid #39425D ",
                width: "421px",
                height: "68px",
                background: "#FFFFFF",
              }}
            />
            <Button
              type="primary"
              style={{
                background: "linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)",
                width: "180px",
                height: "68px",
                borderRadius: "10px",
                fontFamily: "Open Sans, serif",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              Subscribe
            </Button>
          </div>
        </Col>

        {/* Footer Links */}
        <Col span={24}>
          <Row gutter={[16, 16]} justify="center">
            {/* Jadoo Section */}
            <Col xs={24} sm={12} md={6} style={{ textAlign: "center" }}>
              <h3
                style={{
                  color: "#181E4B",
                  fontFamily: "Poppins, serif",
                  fontWeight: "400",
                  fontSize: "44px",
                }}
              >
                Jadoo.
              </h3>
              <p
                style={{
                  color: "#5E6282",
                  fontSize: "13px",
                  fontFamily: "Poppins, serif",
                  fontWeight: "400",
                }}
              >
                <span> Book your trip in minute, get full</span> <br />
                <span>Control for much longer.</span>
              </p>
            </Col>

            {/* Company Links */}
            <Col xs={24} sm={12} md={6}>
              <h4
                style={{
                  fontFamily: "Poppins, serif",
                  fontWeight: "700",
                  fontSize: "21px",
                  color: "#080809",
                }}
              >
                Company
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    fontFamily: "Poppins, serif",
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#6F727B",
                  }}
                >
                  About
                </li>
                <li
                  style={{
                    fontFamily: "Poppins, serif",
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#6F727B",
                  }}
                >
                  Careers
                </li>
                <li
                  style={{
                    fontFamily: "Poppins, serif",
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#6F727B",
                  }}
                >
                  Mobile
                </li>
              </ul>
            </Col>

            {/* Contact Links */}
            <Col xs={24} sm={12} md={6}>
              <h4
                style={{
                  fontFamily: "Poppins, serif",
                  fontWeight: "700",
                  fontSize: "21px",
                  color: "#080809",
                }}
              >
                Contact
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    fontFamily: "Poppins, serif",
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#6F727B",
                  }}
                >
                  Help/FAQ
                </li>
                <li
                  style={{
                    fontFamily: "Poppins, serif",
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#6F727B",
                  }}
                >
                  Press
                </li>
                <li
                  style={{
                    fontFamily: "Poppins, serif",
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#6F727B",
                  }}
                >
                  Affiliates
                </li>
              </ul>
            </Col>

            {/* More Links */}
            <Col xs={24} sm={12} md={6}>
              <h4
                style={{
                  fontFamily: "Poppins, serif",
                  fontWeight: "700",
                  fontSize: "21px",
                  color: "#080809",
                }}
              >
                More
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    fontFamily: "Poppins, serif",
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#6F727B",
                  }}
                >
                  Airlinefees
                </li>
                <li
                  style={{
                    fontFamily: "Poppins, serif",
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#6F727B",
                  }}
                >
                  Airline
                </li>
                <li
                  style={{
                    fontFamily: "Poppins, serif",
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#6F727B",
                  }}
                >
                  Low fare tips
                </li>
              </ul>
            </Col>
          </Row>
        </Col>

        {/* Social Media and App Links */}
        <Col span={24} style={{ textAlign: "center", marginTop: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            {/* Updated Icon Styles */}
            <FacebookOutlined
              style={{
                fontSize: "24px",
                margin: "0 10px",
                backgroundColor: "#3b5998",
                padding: "8px",
                borderRadius: "50%",
                color: "#fff",
              }}
            />
            <TwitterOutlined
              style={{
                fontSize: "24px",
                margin: "0 10px",
                backgroundColor: "#1da1f2",
                padding: "8px",
                borderRadius: "50%",
                color: "#fff",
              }}
            />
            <InstagramOutlined
              style={{
                fontSize: "24px",
                margin: "0 10px",
                backgroundColor: "#e4405f",
                padding: "8px",
                borderRadius: "50%",
                color: "#fff",
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "Poppins, serif",
              fontWeight: "400",
              fontSize: "20px",
              color: "#5E6282",
            }}
          >
            Discover our app
          </p>
          <p>© All rights reserved Jadoo.co</p>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
