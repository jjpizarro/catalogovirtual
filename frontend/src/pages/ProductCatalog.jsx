import React from "react";

import ResultTable from "../components/ResultTable";

import BackButton from "../components/BackButton";
import SearchForm from "../components/SearchForm";
export default function ProductCatalog(){
    const updateTable = (products)=>{

    }
    
    return (<>
                
                <BackButton/>
                <SearchForm updateTable={updateTable}/>
                
                  
                <ResultTable/>
            </>);
}