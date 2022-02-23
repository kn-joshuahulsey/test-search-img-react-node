import './App.css';
import * as React from 'react';
import { useState } from "react";
import axiosInstance from "./axios";

import { Form, Button, Row, Col, Image, Spinner } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { value };
    setLoading(true);
    try {
      const response = await axiosInstance.post("/search", payload);
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  if (data) {
    if (sort) data.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
    else data.sort((a, b) => (a.likes > b.likes) ? 1 : -1);
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} className="d-flex p-5">
        <Form.Control
          value={value}
          placeholder="Enter email"
          onChange={(e) => { setValue(e.target.value); }}
          className="w-25 ms-auto"
          disabled={loading}
          required
        />
        <Button variant="primary" type="submit" className='ms-3 me-auto d-flex'>
          Submit
          {loading && <Spinner animation="border" className='ms-2' style={{ width: "23px", height: '23px' }} />}
        </Button>
      </Form>
      {data && <>
        <div className='d-flex'>
          <h6 className='ms-auto mt-auto mb-auto me-3'>Sort by Likes</h6>
          <div className="me-auto">
            <BootstrapSwitchButton
              checked={sort}
              onstyle="primary"
              offstyle="danger"
              onChange={() => { setSort(!sort); }}
            />
          </div>
        </div>
        <Row className='p-5'>
          {data.map((img, i) => <Col md={3} sm={4} xs={6} key={i} className="mb-3">
            <Image src={img.imageUrl} alt="img" className="w-100 h-100" rounded />
            <h4 style={{ position: "relative", color: "red", top: "-30px" }}>{img.likes}</h4>
          </Col>)}
        </Row>
      </>}
    </div>
  );
}

export default App;
