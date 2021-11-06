package com.atirodeas.catalogovirtual.backend.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.atirodeas.catalogovirtual.backend.entities.Producto;
import com.atirodeas.catalogovirtual.backend.services.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ProductoController {
    @Autowired
    private ProductoService productoServices;

    @GetMapping("/productos")
    public ResponseEntity<List<Producto>> getProductos(@RequestParam(required = false) Double precio, @RequestParam(required = false) String categoria, @RequestParam(required = false) String nombre){
        try {
            List<Producto> productos = new ArrayList<>();
            if(precio != null){
                productoServices.consultarPorMenorPrecio(precio.doubleValue()).forEach(productos::add);
            }else if(categoria != null){
                productoServices.consultarPorCategoria(categoria).forEach(productos::add);;
            }else if( nombre != null){
                productoServices.consultarPorNombre(nombre).forEach(productos::add);
            }else{
                productoServices.buscarTodos().forEach(productos::add);
            }
            
            if(productos.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(productos, HttpStatus.OK);

        } catch (Exception e) {
           return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/productos/{id}")
    public ResponseEntity<Producto> getProductoById(@PathVariable("id") String id){
        Optional<Producto> productoInDB = productoServices.buscarPorId(id);
        return productoInDB.map(producto -> new ResponseEntity<>(producto,HttpStatus.OK)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/productos/categorias")
    public ResponseEntity<List<String>> getCategorias(){
        try {
            List<String> categorias = new ArrayList<>();
            productoServices.buscarTodos().forEach(producto ->{categorias.add(producto.getCategoria());});
            if(categorias.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(categorias.stream().distinct().collect(Collectors.toList()), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
         }
    }
    @PostMapping("/productos")
    public ResponseEntity<Producto> createProducto(@RequestBody Producto producto) {
        try {
            Producto newProducto = productoServices.guardar(producto);
            return new ResponseEntity<>(newProducto, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }
    @PutMapping("/productos/{id}")
    public ResponseEntity<Producto> updateProducto(@PathVariable("id") String id, @RequestBody Producto producto){
        try {
            producto.setId(id);
            Producto uProducto = productoServices.guardar(producto);
            return new ResponseEntity<>(uProducto, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/productos/{id}")
    public ResponseEntity<HttpStatus> deleteProducto(@PathVariable("id") String id){
        try {
            productoServices.eliminarPorId(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
