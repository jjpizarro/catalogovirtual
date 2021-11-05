import React from 'react';
import Table from 'react-bootstrap/Table';

const ResultTable = (props) =>{

    return (<Table bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Disponible</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
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
          </tr>
          
        </tbody>
      </Table>);
}

export default ResultTable;