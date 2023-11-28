import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContex'

const ProductItem = (props) => {
    const {id,productName,price,productImage} = props.data
    const {addToCart,cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
    // console.log(id)
  return (
    <div className='product-item'>
        <img src={productImage} alt="" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <button className='addBtn' onClick={()=>addToCart(id)}>Add to cart{cartItemAmount>0?(`(${cartItemAmount})`):('')}</button>
        </div>
      
     
    </div>
  )
}

export default ProductItem