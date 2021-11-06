import http from './http-config';


    const getAll = ()=> {
      return http.get("/productos");
    }
  
    const get = (id)=> {
      return http.get(`/productos/${id}`);
    }
  
    const create = (data)=> {
      return http.post("/productos", data);
    }
  
    const update = (id, data) =>{
      return http.put(`/productos/${id}`, data);
    }
  
    const remove = (id)=> {
      return http.delete(`/productos/${id}`);
    }
  
    const findByPrice = (price) => {
      return http.get(`/productos?precio=${price}`);
    }
    
    const findByCategory = (category) => {
        return http.get(`/productos?categoria=${category}`);
    }

    const findByName = (name) => {
        return http.get(`/productos?nombre=${name}`);
    }
    const getAllCategories = ()=>{
      return http.get('/productos/categorias');
    }
    const exportedObject = {
      getAll,
      get,
      create,
      update,
      remove,
      findByPrice,
      findByCategory,
      findByName,
      getAllCategories
    }
    export default exportedObject;

  
