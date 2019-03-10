import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import evoteServiceImage from './assets/images/evote/service-image.png';
import eSecuritiesServiceImage from './assets/images/e-securities/service-image.jpg';
import crowdnetServiceImage from './assets/images/crowdnet/service-image.png';
import './KsdService.css';

function KsdService() {
  return (
    <div className="ksdService">
      <Container>
        <Row>
          <Col sm md={6} lg={4}>
            <Card className="card">
              <Card.Img variant="top" src={eSecuritiesServiceImage} />
              <Card.Body>
                <Card.Title>전자증권제도</Card.Title>
                <Card.Text>금융환경 선진화를 한발 앞당깁니다.</Card.Text>
                <Button variant="primary" href="https://e-securities.ksd.or.kr">
                  전자증권 개발지원 바로가기
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm md={6} lg={4}>
            <Card className="card">
              <Card.Img variant="top" src={crowdnetServiceImage} />
              <Card.Body>
                <Card.Title>크라우드넷</Card.Title>
                <Card.Text>크라우드펀딩 시장의 성장을 이끕니다!</Card.Text>
                <Button variant="primary" href="https://www.crowdnet.or.kr">
                  크라우드넷 바로가기
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm md={6} lg={4}>
            <Card className="card">
              <Card.Img variant="top" src={evoteServiceImage} />
              <Card.Body>
                <Card.Title>전자투표·전자위임장</Card.Title>
                <Card.Text>소중한 권리행사를 안전하고 편리하게!</Card.Text>
                <Button variant="primary" href="https://evote.ksd.or.kr">
                  K-eVote 바로가기
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default KsdService;
