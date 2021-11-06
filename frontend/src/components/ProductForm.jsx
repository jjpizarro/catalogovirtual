import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ProductForm = (props)=>{
    const {submitForm,handleClose} = props;
    const [producto, setProducto] = useState({
        nombre: props.producto ? props.producto.nombre : '',
        descripcion: props.producto ? props.producto.descripcion : '',
        categoria: props.producto ? props.producto.categoria : '',
        precio: props.producto ? props.producto.precio : 0,
        cantidad: props.producto ? props.producto.cantidad : 0,
        disponibilidad: props.producto ? props.producto.disponibilidad : false,
        imagen: props.producto ? props.producto.imagen : ''
      });
      

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
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control required  as="textarea" name="descripcion" onChange={onChange} value={producto.descripcion} placeholder="Ingrese descripción" />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" as={Col} controlId="categoria">
                <Form.Label>Categoría</Form.Label>
                <Form.Select defaultValue="Seleccione..." name="categoria" onChange={onChange} value={producto.categoria}>
                    <option>Seleccione...</option>
                    <option>...</option>
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
                    <Form.Label>Fotografía</Form.Label>
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
export default ProductForm;