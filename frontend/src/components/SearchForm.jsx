import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";

const SearchForm = ({updateTable,label,type,values})=>{
    const [criteria, setCriteria] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
       updateTable(criteria);
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
                                <span className="fw-bold">{label}</span>
                            </Form.Label>
                            
                        </Col>
                        <Col xs="auto">
                            {type === 'select' ?
                                 (<Form.Select defaultValue="Seleccione..." name="categoria" onChange={handleOnChange} value={criteria}>
                                    <option>Seleccione...</option>
                                    {values.length > 0 && values.map((category, index) =>(<option key={index} value={category}>{category}</option>))} 
                                  </Form.Select>)
                                :(<Form.Control type={type} className="mb-2" id="precio" onChange={handleOnChange} value={criteria} />)
                            }
                            
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
SearchForm.propTypes = {
    updateTable:PropTypes.func.isRequired, 
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired, 
    values:PropTypes.array
    
  };
export default SearchForm;