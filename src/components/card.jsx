import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button , CardImg } from 'react-bootstrap';

import "./card.css"

const ProductCard = (props) => {
    let {imgSrc, price , title} = props.data
  return (
    <Card className="p-0 overflow-hidden h-100 shadow card1">
        <div className='overflow-hidden rounded p-0 bg-light card-img1'>
            <Card.Img className='img1' variant="top" src={imgSrc} />
        </div>
        <Card.Body className="text-center card-body1">
            <Card.Title className="display-6">{price}</Card.Title>
            <Card.Title>{title}</Card.Title>
        </Card.Body>
        {/* <Button className='w-100 rounded-0' variant='success'>Add to Cart</Button> */}
    </Card>
  )
}

export default ProductCard;

