package com.atirodeas.catalogovirtual.backend.repositories;

import java.util.List;

import com.atirodeas.catalogovirtual.backend.entities.Producto;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ProductoRepository extends MongoRepository<Producto,String> {
    //@Query("{ 'precio' : { $lte: ?0 } }")
    public List<Producto> findByPrecioLessThanEqual(double precio);
    public List<Producto> findByCategoria(String categoria);
    @Query("{'nombre':{'$regex':'?0','$options':'i'}}")  
    public List<Producto> findByNombreLike(String nombre);
}
