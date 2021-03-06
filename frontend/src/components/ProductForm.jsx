import React,{useState,useEffect} from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProductService from '../services/ProductService';
import PropTypes from "prop-types";

const ProductForm = (props)=>{
    const {submitForm,handleClose} = props;
    let initialProductState = {
        nombre: props.producto ? props.producto.nombre : '',
        descripcion: props.producto ? props.producto.descripcion : '',
        categoria: props.producto ? props.producto.categoria : '',
        precio: props.producto ? props.producto.precio : 0,
        cantidad: props.producto ? props.producto.cantidad : 0,
        disponibilidad: props.producto ? props.producto.disponibilidad : false,
        imagen: props.producto ? props.producto.imagen : ''
      };
      if(props.producto && props.producto.id){
        initialProductState["id"] = props.producto.id
      }
     
     const [producto, setProducto] = useState(initialProductState);
      const [categories, setCategories] = useState([]);
      
      useEffect(()=>{
          const getCategories = () =>{
            ProductService.getAllCategories()
                .then((response)=>{
                    setCategories(response.data);
                }).catch(e => {
                    console.log(e);
                });
          }
          getCategories();
      },[]);

      const onChange = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
            });
        }
        

        
    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm(producto);
        handleClose();
      
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control required type="text" name="nombre" onChange={onChange} value={producto.nombre} placeholder="Ingrese el nombre" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="descripcion">
                    <Form.Label>Descripci??n</Form.Label>
                    <Form.Control required  as="textarea" name="descripcion" onChange={onChange} value={producto.descripcion} placeholder="Ingrese descripci??n" />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" as={Col} controlId="categoria">
                <Form.Label>Categor??a</Form.Label>
                <Form.Select defaultValue="Seleccione..." name="categoria" onChange={onChange} value={producto.categoria}>
                    <option>Seleccione...</option>
                    {categories.length > 0 && categories.map((category, index) =>(<option key={index} value={category}>{category}</option>))}
                    
                </Form.Select>
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="precio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control required type="number" name="precio" step="any" onChange={onChange} value={producto.precio} placeholder="Ingrese precio" />

                </Form.Group>
                <Form.Group as={Col} controlId="cantidad">
                    <Form.Label>Cantidad en stock</Form.Label>
                    <Form.Control required type="number" name="cantidad" onChange={onChange} value={producto.cantidad}  placeholder="Ingrese cantidad" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="imagen">
                    <Form.Label>Fotograf??a</Form.Label>
                    <Form.Control required type="url" name="imagen" onChange={onChange} value={producto.imagen} placeholder="Ingrese el nombre" />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="disponibilidad">
                <Form.Check type="checkbox" label="Disponibilidad" name="disponibilidad" onChange={onChange} checked={producto.disponibilidad} value={producto.disponibilidad} />
            </Form.Group>
            <Form.Group as={Row} className="justify-content-md-center mb-3">
                <Col md="auto">
                    <Button type="submit" variant="success">Guardar</Button>{' '}
                    <Button onClick={e => handleClose() } variant="secondary">Cancelar</Button>
                </Col>
            </Form.Group>
        
        </Form>
    );
}
ProductForm.propTypes = {
    handleClose:PropTypes.func.isRequired, 
    producto:PropTypes.object, 
    submitForm:PropTypes.func.isRequired
    
  };
export default ProductForm;