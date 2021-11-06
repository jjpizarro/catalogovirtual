import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ProductForm from './ProductForm';
//import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';


export default function ModalForm({label, variant,styles, product, onCreateOrUpdate}) {
   
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeBtn = <button className="close" onClick={handleClose}>&times;</button>
  const labelButton = label;
  const button = <Button
                    variant={variant}
                    onClick={handleShow}
                    style={{float: "left", marginRight:"10px"}}>{labelButton}
                </Button>
  const title = label;
  
   
  return (
      <div>
          <div className={styles}>{button}</div>
        
        
        <Modal show={show} onHide={handleClose}>
          <ModalHeader closeButton  close={closeBtn}><h4>{title}</h4></ModalHeader>
          <ModalBody>
              
              {product?
                <ProductForm handleClose={handleClose} producto = {product} submitForm={onCreateOrUpdate}/>:
                <ProductForm handleClose={handleClose} submitForm={onCreateOrUpdate}/>
                  }           
          </ModalBody>
        </Modal>
      </div>
    )
}