import React,{useState,useEffect} from "react";

import ResultTable from "../components/ResultTable";

import BackButton from "../components/BackButton";
import SearchForm from "../components/SearchForm";
import ProductService from '../services/ProductService';

export default function ProductCatalogPrice(){
    const [catalog, setCatalog] = useState([]);
    const [categories, setCategories] = useState([]);
    const updateTable = (criteria)=>{
        ProductService.findByCategory(criteria).then(response => setCatalog(response.data)).catch(e => console.log(e));

    }
    useEffect(()=>{
        const getCategories = () =>{
          ProductService.getAllCategories()
              .then((response)=>{
                  setCategories(response.data);
              }).catch(e => {
                  console.log(e);
              });
        }
        getCategories();
    },[]);
    
    return (<>
                <h2>Catálogo de productos</h2>
                <BackButton/>
                <SearchForm updateTable={updateTable} label="Consulta por categoría" type="select" values={categories}/>
                <ResultTable products = {catalog}/>
            </>);
}