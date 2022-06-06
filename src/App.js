import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Col, Form, Row } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Form>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">Email       </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">Password        </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
</Form>
      </header>
    </div>
  );
}

export default App;
