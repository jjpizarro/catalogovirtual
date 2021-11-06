import React from 'react';
import Table from 'react-bootstrap/Table';
import ModalForm from "../components/ModalForm";
const ProductListTable = ()=>{
  const producto = {
    id:'123qweasd',
    nombre: 'jj',
    descripcion: 'Mi descripcion',
    categoria: 'Categoria',
    precio: 12,
    cantidad: 12,
    disponibilidad:  true,
    imagen: 'https://miurl.com'
  };
  const editProduct = (product)=>{
    console.log('Editar producto producto');
    console.log(product);
  }
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
          <tr>
            <td><ModalForm label="Editar" styles="d-flex justify-content-center" variant="warning" product={producto} onCreateOrUpdate={editProduct} /></td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </Table>);
}
export default ProductListTable;