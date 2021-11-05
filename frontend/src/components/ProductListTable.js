import React from 'react';
import Table from 'react-bootstrap/Table';
const ProductListTable = ()=>{
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
            <td>1</td>
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