import React from 'react';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

export interface RegisterFormProps {
    onSubmit(values: RegisterFormValues): void;
}

export type RegisterFormValues = {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
};

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => (
    <Formik
        initialValues={{ username: '', email: '', password: '', passwordConfirm: '' }}
        onSubmit={onSubmit}>
        {({ handleBlur, handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingInputUsername" label="Username" className="mb-3">
                    <Form.Control
                        type="text"
                        id="floatingInputUsername"
                        name="username"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="myusername"
                        value={values.username}
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
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        value={values.email}
                    />
                </FloatingLabel>

                <hr />

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control
                        type="password"
                        id="floatingPassword"
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Password"
                        value={values.password}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingPasswordConfirm"
                    label="Confirm Password"
                    className="mb-3">
                    <Form.Control
                        type="password"
                        id="floatingPasswordConfirm"
                        name="passwordConfirm"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        value={values.passwordConfirm}
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
                        <FontAwesomeIcon icon={faGoogle} className="me-2" /> Sign up with Google
                    </Button>
                </div>

                <div className="d-grid">
                    <Button
                        className="btn-login fw-bold text-uppercase"
                        size="lg"
                        type="submit"
                        variant="facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="me-2" /> Sign up with
                        Facebook
                    </Button>
                </div>
            </Form>
        )}
    </Formik>
);
