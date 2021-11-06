import React from 'react';
import Table from 'react-bootstrap/Table';
import ModalForm from "./ModalForm";
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

const ProductListTable = ({products,onEdit, onRemove})=>{
    return (<Table bordered hover>
        <thead>
          <tr>
            <th>Editar</th>
            <th>Eliminar</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Disponible</th>
            <th>Precio</th>
            <th>Stock</th>
           
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
              products.map((product,index)=>
               ( <tr key={index}>
                    <td><ModalForm label="Editar" styles="d-flex justify-content-center" variant="warning" product={product} onCreateOrUpdate={onEdit} /></td>
             
                    <td>
                      <div className="d-flex justify-content-center">
                         <Button variant="danger" onClick={() => onRemove(product.id)}>
                           Eliminar
                        </Button>
                      </div>
                    </td>
                    <td>{product.nombre}</td>
                    <td>{product.categoria}</td>
                    <td>{product.disponibilidad? 'Si':'No'}</td>
                    <td>{product.precio}</td>
                    <td>{product.cantidad}</td>
                </tr>)
              )
            
          ):(<tr>
            <td colSpan={7}>No se encontraron registros</td>
          </tr>)}
          
          
        </tbody>
      </Table>);
}
ProductListTable.propTypes = {
  onEdit:PropTypes.func.isRequired, 
  products:PropTypes.object, 
  onRemove:PropTypes.func.isRequired
  
};
export default ProductListTable;