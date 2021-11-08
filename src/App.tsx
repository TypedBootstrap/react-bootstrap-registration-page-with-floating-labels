import React from 'react';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const App: React.FC = () => (
    <Container>
        <Row>
            <Col lg="10" xl="9" className="mx-auto">
                <Card className="flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                    <div className="card-img-left d-none d-md-flex"></div>
                    <Card.Body className="p-4 p-sm-5">
                        <Card.Title className="text-center mb-5 fw-light fs-5">Register</Card.Title>
                        <Form>
                            <FloatingLabel
                                controlId="floatingInputUsername"
                                label="Username"
                                className="mb-3">
                                <Form.Control
                                    type="text"
                                    id="floatingInputUsername"
                                    placeholder="myusername"
                                    required
                                    autoFocus
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInputEmail"
                                label="Email address"
                                className="mb-3">
                                <Form.Control
                                    type="email"
                                    id="floatingInputEmail"
                                    placeholder="name@example.com"
                                />
                            </FloatingLabel>

                            <hr />

                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3">
                                <Form.Control
                                    type="password"
                                    id="floatingPassword"
                                    placeholder="Password"
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingPasswordConfirm"
                                label="Confirm Password"
                                className="mb-3">
                                <Form.Control
                                    type="password"
                                    id="floatingPasswordConfirm"
                                    placeholder="Confirm Password"
                                />
                            </FloatingLabel>

                            <div className="d-grid mb-2">
                                <Button
                                    className="btn-login fw-bold text-uppercase"
                                    size="lg"
                                    type="submit"
                                    variant="primary">
                                    Register
                                </Button>
                            </div>

                            <a className="d-block text-center mt-2 small" href="#">
                                Have an account? Sign In
                            </a>

                            <hr className="my-4" />

                            <div className="d-grid mb-2">
                                <Button
                                    className="btn-login fw-bold text-uppercase"
                                    size="lg"
                                    type="submit"
                                    variant="google">
                                    <FontAwesomeIcon icon={faGoogle} className="me-2" /> Sign up
                                    with Google
                                </Button>
                            </div>

                            <div className="d-grid">
                                <Button
                                    className="btn-login fw-bold text-uppercase"
                                    size="lg"
                                    type="submit"
                                    variant="facebook">
                                    <FontAwesomeIcon icon={faFacebookF} className="me-2" /> Sign up
                                    with Facebook
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default App;
