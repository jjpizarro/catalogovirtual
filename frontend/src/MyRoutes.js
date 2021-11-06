import {Routes,Route} from "react-router-dom";
import Main from "./pages/Main";
import ProductCatalogPrice from "./pages/ProductCatalogPrice";
import ProductList from "./pages/ProductList";
import ProductCatalogCategory from "./pages/ProductCatalogCategory";
import ProductCatalogName from "./pages/ProductCatalogName";
export default function MyRoutes(){
    return (
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/products" element={<ProductList/>} />   
        <Route path="/catalog/price" element={<ProductCatalogPrice/>} />
        <Route path="/catalog/category" element={<ProductCatalogCategory/>} />  
        <Route path="/catalog/name" element={<ProductCatalogName/>} /> 
        
    </Routes>)
}