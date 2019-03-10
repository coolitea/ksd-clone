import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './KsdButtonToolbar.css';

function KsdButtonToolbar() {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <ButtonToolbar className="ksdButtonToolbar">
          <Button variant="outline-dark" href="#">
            양식/서식
          </Button>
          <Button variant="outline-dark" href="#">
            주식찾기
          </Button>
          <Button variant="outline-dark" href="#">
            상속인금융거래조회
          </Button>
          <Button variant="outline-dark" href="#">
            공익신고
          </Button>
          <Button variant="outline-dark" href="#">
            윤리경영
          </Button>
          <Button variant="outline-dark" href="#">
            법령및규정정보
          </Button>
          <Button variant="outline-dark" href="#">
            위변조증권
          </Button>
          <Button variant="outline-dark" href="#">
            경영공시
          </Button>
        </ButtonToolbar>
      </div>
    </div>
  );
}

export default KsdButtonToolbar;
