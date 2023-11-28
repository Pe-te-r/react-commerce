import React from 'react'
import { PRODUCTS } from './product'
import ProductItem from './ProductItem'
// import ProductItem from './ProductItem'
import './Shop.css'
const Shop = () => {
  return (
    <div className='shop'>
        <div className="shopTitle">
            <h1>Black Market</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product)=>(
              <ProductItem data={product}/>
            ))}
        </div>
        
    </div>
  )
}

export default Shop
    