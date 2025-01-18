import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { DownOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import traveller from '../images/Traveller 1.png';

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div style={{ background: '#001529', color: 'white', padding: '100px 0' }}>
      <Container>
        <Row gutter={[16, 16]} align="middle" justify="center">
          <Col xs={24} md={12}>
            <div style={{ textAlign: 'left' }}>
              <Title style={{ color: 'white', fontSize: '48px' }}>
                BEST DESTINATIONS AROUND THE WORLD
              </Title>
              <h1>Travel, enjoy, and live a fulfilling life</h1>
              <Paragraph style={{ color: 'white', fontSize: '18px' }}>
                Explore the world's most beautiful destinations, experience new cultures, and make unforgettable memories. Whether you’re an adventure seeker, a nature lover, or a history enthusiast, there’s something for everyone.
              </Paragraph>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: '#f1a501',
                  borderColor: '#f1a501',
                  fontSize: '16px',
                  padding: '10px 20px',
                  marginRight: '10px',
                }}
              >
                Find out more
                <DownOutlined style={{ marginLeft: '8px' }} />
              </Button>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: '#df6951',
                  borderColor: '#df6951',
                  fontSize: '16px',
                  padding: '10px 20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PlayCircleOutlined style={{ fontSize: '24px', color: 'white' }} />
                <span style={{ marginLeft: '8px', color: 'white' }}>Play Demo</span>
              </Button>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <img
              src={traveller}
              alt="Hero"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
