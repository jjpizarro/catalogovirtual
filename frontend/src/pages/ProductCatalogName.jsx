import React,{useState} from "react";

import ResultTable from "../components/ResultTable";

import BackButton from "../components/BackButton";
import SearchForm from "../components/SearchForm";
import ProductService from '../services/ProductService';

export default function ProductCatalogName(){
    const [catalog, setCatalog] = useState([]);
    const updateTable = (criteria)=>{
        ProductService.findByName(criteria).then(response => setCatalog(response.data)).catch(e => console.log(e));

    }
    
    
    return (<>
                <h2>Catálogo de productos</h2>
                <BackButton/>
                <SearchForm updateTable={updateTable} label="Consulta por nombre" type="text" />
                <ResultTable products = {catalog}/>
            </>);
}