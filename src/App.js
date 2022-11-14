import React, {Suspense, lazy} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Frontpage from './Frontpage'

const About = lazy(() => import("./About"));

function App() {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback ="I am loading">
        <Navbar bg='light' expand="lg">
          <Container>
            <Navbar.Brand href='/'>ToDo app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route index element={<Frontpage></Frontpage>}/>
          <Route path='/about' element={<About></About>} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
