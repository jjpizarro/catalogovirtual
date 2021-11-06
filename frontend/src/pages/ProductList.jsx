import React, {useState,useEffect} from "react";
import ProductListTable from '../components/ProductListTable';
import BackButton from "../components/BackButton";
import ModalForm from "../components/ModalForm";
import ProductService from "../services/ProductService";


export default function ProductList(){
    const initialProductsState = [];
    const [products, setProducts] = useState(initialProductsState);
    
    useEffect(()=>{
        const getAllProducts = ()=>{
            ProductService.getAll()
                .then((response)=>{
                    setProducts(response.data);
                    console.log(response.data);
                }).catch((e) => {
                    console.log(e);
                });
        }
        getAllProducts();
    }, []);
    console.log(products)
    const addProduct = (product)=>{
        console.log('Agregar producto');
        console.log(product);
    }
    return (
        <>
            <BackButton />
            <ModalForm label="Agregar" styles="d-flex justify-content-end mb-2" variant="outline-primary"onCreateOrUpdate={addProduct} />
            <ProductListTable products ={products} />
        </>
        )
}