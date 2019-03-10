import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import logo from './logo.png';

function KsdNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          // width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="KSD소개" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#about/1.1">CEO</NavDropdown.Item>
            <NavDropdown.Item href="#about/1.2">CI</NavDropdown.Item>
            <NavDropdown.Item href="#about/1.3">조직/임원</NavDropdown.Item>
            <NavDropdown.Item href="#about/1.4">미션/비전</NavDropdown.Item>
            <NavDropdown.Item href="#about/1.5">윤리경영</NavDropdown.Item>
            <NavDropdown.Item href="#about/1.6">경영공시</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#about/2.1">
              KSD일자리종합추진계획
            </NavDropdown.Item>
            <NavDropdown.Item href="#about/2.2">채용안내</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#about/3.1">공지사항</NavDropdown.Item>
            <NavDropdown.Item href="#about/3.2">보도자료</NavDropdown.Item>
            <NavDropdown.Item href="#about/3.3">KSD홍보</NavDropdown.Item>
            <NavDropdown.Item href="#about/3.4">입찰공고</NavDropdown.Item>
            <NavDropdown.Item href="#about/3.5">오시는길</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="전자증권제도" id="electronic-securities">
            <NavDropdown.Item href="#electronic-securities/1.1">
              이용안내
            </NavDropdown.Item>
            <NavDropdown.Item href="#electronic-securities/1.2">
              서비스이행표준
            </NavDropdown.Item>
            <NavDropdown.Item href="#electronic-securities/1.3">
              FAQ
            </NavDropdown.Item>
            <NavDropdown.Item href="#electronic-securities/1.4">
              Q&A
            </NavDropdown.Item>
            <NavDropdown.Item href="#electronic-securities/1.5">
              고객제안
            </NavDropdown.Item>
            <NavDropdown.Item href="#electronic-securities/1.6">
              양식/서식
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#service">서비스안내</Nav.Link>
          <Nav.Link href="#customer">고객정보센터</Nav.Link>
          <Nav.Link href="#pricing">정보공개</Nav.Link>
          <Nav.Link href="#social-contribution">사회공헌</Nav.Link>
          <Nav.Link href="#e-service">e서비스</Nav.Link>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">
            <FaSearch />
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default KsdNav;
