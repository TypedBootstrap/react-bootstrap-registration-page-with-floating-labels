import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { RegisterForm, RegisterFormValues } from './components/RegisterForm';

const App: React.FC = () => {
    const handleRegistration = (values: RegisterFormValues): void => {
        console.log({ values });
    };

    return (
        <Container>
            <Row>
                <Col lg="10" xl="9" className="mx-auto">
                    <Card className="flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-img-left d-none d-md-flex"></div>
                        <Card.Body className="p-4 p-sm-5">
                            <Card.Title className="text-center mb-5 fw-light fs-5">
                                Register
                            </Card.Title>
                            <RegisterForm onSubmit={handleRegistration} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
