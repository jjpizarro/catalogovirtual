import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function BackButton (){
    let navigate = useNavigate();
    return (
        <Row>
            <Col>
                <Button variant="link"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Regresar
                </Button>
            </Col>
        </Row>);
}