import React from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import all_products from '../Components/Assets/sample data/all_products'

const Product = () => {
  const {productId} = useParams();
  const product = all_products.find((e)=> e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product