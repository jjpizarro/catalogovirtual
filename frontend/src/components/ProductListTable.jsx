import React from 'react';
import Table from 'react-bootstrap/Table';
import ModalForm from "./ModalForm";
const ProductListTable = ({products})=>{
  console.log(products);
  /*const producto = {
    id:'123qweasd',
    nombre: 'jj',
    descripcion: 'Mi descripcion',
    categoria: 'Categoria',
    precio: 12,
    cantidad: 12,
    disponibilidad:  true,
    imagen: 'https://miurl.com'
  };*/
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
          {products.length > 0 ? (
              products.map((product,index)=>
               ( <tr key={index}>
                    <td><ModalForm label="Editar" styles="d-flex justify-content-center" variant="warning" product={product} onCreateOrUpdate={editProduct} /></td>
                    <td>Eliminar</td>
                    <td>{product.nombre}</td>
                    <td>{product.categoria}</td>
                    <td>{product.disponible}</td>
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
export default ProductListTable;