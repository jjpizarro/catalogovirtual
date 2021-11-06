import React from "react";
import ProductListTable from '../components/ProductListTable';
import BackButton from "../components/BackButton";
import ModalForm from "../components/ModalForm";


export default function ProductList(){
    const addProduct = (product)=>{
        console.log('Agregar producto');
        console.log(product);
    }
    return (<>
        <BackButton />
        <ModalForm label="Agregar" styles="d-flex justify-content-end mb-2" variant="outline-primary"onCreateOrUpdate={addProduct} />
        <ProductListTable/>
        </>)
}