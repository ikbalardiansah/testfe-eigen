import React from 'react';
import './App.css';
import { NewsList } from "./component/NewsList";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Row>
          <Col md={6}>
      <NewsList/>
      </Col>
      </Row>
    </div>
    </div>
  );
}

export default App;
