import {Routes,Route} from "react-router-dom";
import Main from "./pages/Main";
import ProductCatalog from "./pages/ProductCatalog";
import ProductList from "./pages/ProductList";
export default function MyRoutes(){
    return (
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/products" element={<ProductList/>} />   
        <Route path="/catalogs" element={<ProductCatalog/>} />  
        
    </Routes>)
}