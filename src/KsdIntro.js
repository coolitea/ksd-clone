import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './KsdIntro.css';

function KsdIntro() {
  return (
    <React.Fragment>
      <div className="ksdIntro">
        <h2 className="blue">마침내,</h2>
        <h2 className="blue__impact">2019년 9월 16일</h2>
        <h2 className="blue">종이증권이 </h2>
        <h2 className="blue">
          <span className="blue__impact">전자증권</span>으로 바뀝니다
        </h2>
      </div>
    </React.Fragment>
  );
}

export default KsdIntro;
