package com.atirodeas.catalogovirtual.backend.services;

import java.util.List;
import java.util.Optional;

import com.atirodeas.catalogovirtual.backend.entities.Producto;
import com.atirodeas.catalogovirtual.backend.repositories.ProductoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;
    public Producto guardar(Producto producto){
        if(producto.getId() != null){
            Optional<Producto> productoInDB = productoRepository.findById(producto.getId());
            if(productoInDB.isPresent()){
                productoInDB.get().setCategoria(producto.getCategoria());
                productoInDB.get().setNombre(producto.getNombre());
                productoInDB.get().setDescripcion(producto.getDescripcion());
                productoInDB.get().setPrecio(producto.getPrecio());
                productoInDB.get().setDisponibilidad(producto.isDisponibilidad());
                productoInDB.get().setCantidad(producto.getCantidad());
                productoInDB.get().setImagen(producto.getImagen());
                return productoRepository.save(productoInDB.get());
            }
            
        }
        return productoRepository.save(new Producto(producto.getCategoria(), 
        producto.getNombre(), producto.getDescripcion(),producto.getPrecio(), 
        producto.isDisponibilidad(), producto.getCantidad(), producto.getImagen()));
        
    }
    public void eliminar(Producto producto){
        productoRepository.delete(producto);
    }
    public void eliminarPorId(String id){
        productoRepository.deleteById(id);;
    }
    public List<Producto> buscarTodos(){
        return productoRepository.findAll();
    }
    public Optional<Producto> buscarPorId(String id){
        return productoRepository.findById(id);
    }
    public List<Producto> guardarTodos(List<Producto> productos){
        return productoRepository.saveAll(productos);
    }
    public void eliminarTodos(){
        productoRepository.deleteAll();
    }
    public List<Producto> consultarPorMenorPrecio(double precio){
        return productoRepository.findByPrecioLessThanEqual(precio);
    }
    public List<Producto> consultarPorCategoria(String categoria){
        return productoRepository.findByCategoria(categoria);
    }
    public List<Producto> consultarPorNombre(String nombre){
        return productoRepository.findByNombreLike(nombre);
    }

}
