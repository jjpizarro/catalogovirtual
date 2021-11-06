import React, {useState,useEffect} from "react";
import ProductListTable from '../components/ProductListTable';
import BackButton from "../components/BackButton";
import ModalForm from "../components/ModalForm";
import ProductService from "../services/ProductService";
import Alert from 'react-bootstrap/Alert';


export default function ProductList(){
    const initialProductsState = [];
    const [products, setProducts] = useState(initialProductsState);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    useEffect(()=>{
        const getAllProducts = ()=>{
            ProductService.getAll()
                .then((response)=>{
                    setProducts(response.data);
                    
                }).catch((e) => {
                    console.log(e);
                });
        }
        getAllProducts();
    }, []);
    const showError = msg =>{
        setErrorMsg(msg);
        setShowErrorAlert(true);
        window.setTimeout(()=>{
            setErrorMsg(null);
            setShowErrorAlert(false);
        },2000);
    }
    const showSuccess = msg =>{
        setSuccessMsg(msg);
        setShowSuccessAlert(true);
        window.setTimeout(()=>{
            setSuccessMsg(null);
            setShowSuccessAlert(false);
            },2000);
    }
    const addProduct = (product)=>{
         ProductService.create(product)
            .then((response)=>{
                setProducts([response.data,...products])
                showSuccess('Producto agregado satisfactoriamente');
                
            }).catch(e => {
                console.log(e);
                showError("Ocurrio un error al intentar agregar el producto ");
                
            });
        
    }
    
    const editProduct = (product)=>{
        console.log('Editar producto producto');
        
        ProductService.update(product.id, product)
            .then(response =>{
                const itemIndex = products.findIndex(data => data.id === product.id);
                setProducts([...products.slice(0, itemIndex), response.data, ...products.slice(itemIndex + 1)]);
                showSuccess('Producto editado satisfactoriamente');
                
               
            })
            .catch(e =>{
             console.log(e);
             showError("Ocurrio un error al intentar editar el producto ");
            
            });
        }
    const removeProduct = id => {
        console.log("Eliminando producto");
        ProductService.remove(id).then(response =>{
            setProducts(products.filter((product) => product.id !== id));
            showSuccess('Producto eliminado satisfactoriamente');
           
        }).catch(e =>{
            console.log(e);
            showError("Ocurrio un error al intentar eliminar el producto ");
           
        });
    }
    return (
        <>  <h2>Listado de productos</h2>
            {errorMsg && 
                (<Alert variant="danger"  show={showErrorAlert} onClose={() => setShowErrorAlert(false)} dismissible transition>
                    <Alert.Heading>Ocurrio un error!</Alert.Heading>
                    
                    {errorMsg}
                   
                </Alert>)
            }
            {successMsg && 
                (<Alert variant="success" show={showSuccessAlert} onClose={() => setShowSuccessAlert(false)} dismissible transition>
                    <Alert.Heading>Todo marcha bien!</Alert.Heading>
                   
                    {successMsg}
                    
                </Alert>)
            }
            <BackButton />
            <ModalForm label="Agregar" styles="d-flex justify-content-end mb-2" variant="outline-primary" onCreateOrUpdate={addProduct} />
            <ProductListTable products ={products} onEdit = {editProduct} onRemove ={removeProduct}/>
        </>
        )
}