import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SearchForm = (updateTable)=>{
    const{criteria, setCriteria} = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        updateTable();
    }
    const handleOnChange = e => {
        setCriteria(
            e.target.value
        );
    }
    return (
        <Form className="d-flex justify-content-end" onSubmit={handleSubmit}>
                    <Row className="align-items-center g-3">
                        <Col xs="auto">
                            <Form.Label htmlFor="precio" className="col-form-label mb-2">
                                <span className="fw-bold">Consultar por menor precio</span>
                            </Form.Label>
                            
                        </Col>
                        <Col xs="auto">
                            <Form.Control type="number" step="any" className="mb-2" id="precio" onChange={handleOnChange} value={criteria} />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                    Buscar
                            </Button>
                        </Col>
                    </Row>
                 </Form>
    );
}
export default SearchForm;