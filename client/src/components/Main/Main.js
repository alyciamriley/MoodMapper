import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import NavTabs from "../NavTabs";
import SidebarContainer from "../Sidebar";
import Footer from "../Footer";
import "./Main.css"
class Main extends Component {
  render() {
    return (
      <Router>
        <Container className="reactstrapContainer">
          <Row>
            <Col lg="12" className="NavTabs">
              <NavTabs />
            </Col>
          </Row>
          <Row>
            <Col lg="2" className="sidebar">
              <SidebarContainer />{" "}
            </Col>

            <Col lg="10" className="home">
              <div>
                <Row className="info-card-container">
                  <Col lg="4">
                    <Card>
                      <CardHeader className="card-header">Header</CardHeader>
                      <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col lg="4">
                    <Card>
                      <CardHeader className="card-header">Header</CardHeader>
                      <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col lg="4">
                    <Card>
                      <CardHeader className="card-header">Header</CardHeader>
                      <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="12" className="footer">
              <Footer />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default Main;
