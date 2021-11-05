import React from "react";

import ResultTable from "../components/ResultTable";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BackButton from "../components/BackButton";
export default function ProductCatalog(){
    
    
    return (<>
                
                <BackButton/>
            
                <Form className="d-flex justify-content-end">
                    <Row className="align-items-center g-3">
                        <Col xs="auto">
                            <Form.Label htmlFor="precio" className="col-form-label">
                                <span className="fw-bold">Consultar por menor precio</span>
                            </Form.Label>
                            
                        </Col>
                        <Col xs="auto">
                            <Form.Control type="number" className="mb-2" id="precio" />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                    Buscar
                            </Button>
                        </Col>
                    </Row>
                 </Form>
                  
                <ResultTable/>
            </>);
}