import React from 'react';
import Table from 'react-bootstrap/Table';

const ResultTable = ({products}) =>{

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
          {products.length > 0 ? products.map((product, index) =>(
            <tr key={index}>
              <td>{product.nombre}</td>
              <td>{product.categoria}</td>
              <td>{product.disponibilidad? 'Si':'No'}</td>
              <td className="text-center">{product.precio}</td>
              <td>{product.cantidad}</td>
              <td><div className="text-center">
                <img src={product.imagen} width="50" height="50" className="rounded" alt={product.descripcion} />
                </div>
              </td>
            </tr>
          )):(<tr>
            <td colSpan={6}>No se encontraron registros! Realice una nueva búsqueda</td>
          </tr>)

          }
          
        </tbody>
      </Table>);
}

export default ResultTable;