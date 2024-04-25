import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
const Product = ({product}) => {
  return (
    <Card style={{backgroundColor:"#3A5A40",}} className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image}/>
        </a>
        
        <Card.Body>
            <i href={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <h6 style={{color:"rgba(236, 222, 222, 0.85)",fontFamily:"Inter",fontSize:"16px"}}>{product.name}</h6>
                </Card.Title>
            </i>

            {/* <Card.Text as='div'>
                <Rating value={product.rating} 
                text={`${product.numReviews} review`}
                   
                />
            </Card.Text> */}
            
            <Card.Text style={{color:"#ECDEDE",fontFamily:"Inter",fontSize:"16px"}} as='h6'>Rs. {product.price}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
