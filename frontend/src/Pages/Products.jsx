import React from 'react'
import './CSS/Products.css'
import Item from '../Components/Item/Item';
import all_products from '../Components/Assets/sample data/all_products'

const Products = () => {
  return (
    <div className='products'>
      <div>
        <h1>ALL PRODUCTS</h1>
        <hr />
      </div>
      <div className="all-products">
        {all_products.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Products