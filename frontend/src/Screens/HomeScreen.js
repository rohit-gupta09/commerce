import React, {useEffect} from 'react'
import {Row,Col} from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../actions/productActions';
import SubHeader from '../components/SubHeader';
import Header from '../components/Header';

const HomeScreen = () => {
  
  const dispatch = useDispatch()

  const productList=useSelector(state => state.productList)
  const {loading,error,products} = productList

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])

  return (
    <>
    <Header></Header>
    <SubHeader></SubHeader>
    <div className=' row justify-content-center' style={{textAlign:"center",marginTop:"30px",marginBottom:"30px"}}>
    <div className='col-sm-3'>
    <button  type="button" class="btn btn-outline-light" style={{color:"white"}}>Sarees</button>
    </div>
    
    </div>
    {loading ? ( <Loader/> 
    ): error ? (<Message variant='danger'><h3>{error}</h3></Message>) : <Row>
        {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={4}>
                <Product product={product}/>
            </Col>
        ))}
    </Row>}
    
    </>
  )
}

export default HomeScreen
