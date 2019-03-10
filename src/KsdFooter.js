import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './footer_logo.png';

function KsdFooter() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="bottom">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-center mr-auto">
          <Nav.Link href="#">오시는길</Nav.Link>
          <Nav.Link href="#">개인정보 처리방침</Nav.Link>
          <Nav.Link href="#">법적고지</Nav.Link>
          <Nav.Link href="#">저작권보호방침</Nav.Link>
          <Nav.Link href="#">영상정보처리기기 운영·관리 방침</Nav.Link>
          <Nav.Link href="#">이메일주소 무단수집거부</Nav.Link>
          <Nav.Link href="#">뷰어다운로드</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Text>© COOLITEA 2019</Navbar.Text>
    </Navbar>
  );
}

export default KsdFooter;
