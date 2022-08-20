import "./styles.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdb-react-ui-kit";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Home";
import AppDetail from "./pages/AppDetail";

export default function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Thingsenz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calculator" element={<AppDetail app="calculator" />} />
        <Route path="/flashlight" element={<AppDetail app="flashlight" />} />
      </Routes>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-facebook" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-google" />
            </a>
            <a
              href="https://instagram.com/thingsenz"
              className="me-4 text-reset"
            >
              <i className="bi bi-instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-linkedin" />
            </a>
            <a href="https://github.com/thingsenz" className="me-4 text-reset">
              <i className="bi bi-github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="me-3 bi bi-gem" />
                  Thingsenz
                </h6>
                <p>
                  We are a group of tech enthusiats pursuing our passion in
                  various domains. This group serves as a mode for us to explore
                  our passions together and contribute to projects.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Built using</h6>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Bootstrap
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    MDBReact
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FontAwesome
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Babel
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React-Router
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a
                    href="https://thingsenzblog.vercel.app"
                    className="text-reset"
                  >
                    Blog
                  </a>
                </p>
                <p>
                  <a href="https://thingsenz.github.io" className="text-reset">
                    Legacy Site
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="me-2 bi bi-house" />
                  Bengaluru, 560098, Karnataka, IN
                </p>
                <p>
                  <i className="me-3 bi bi-envelope" />
                  <a href="mailto:thingsenz@gmail.com">thingsenz@gmail.com</a>
                </p>
                <p>
                  <i className="me-3 bi bi-phone" /> + 91 XX-XXX-XXXXX
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          2022 - ThingSenz
        </div>
      </MDBFooter>
    </Router>
  );
}
