import React, { useContext } from 'react'
import { PRODUCTS } from '../shop/product'
import { ShopContext } from '../../context/ShopContex'
import { useNavigate } from 'react-router-dom'
import CartItem
 from './CartItem'
const Cart = () => {
  const {cartItems,getTotalCartAmount}= useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1 style={{margin:'25px 0px',fontSize:'1.6rem'}}>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id] != 0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      {totalAmount>0? 
       <div className="checkout">
       
            <p>total: ${totalAmount}</p>
            <button onClick={()=>navigate('/')}>continue</button>
        </div>: <h2>Your cart is empty</h2>}
    </div>
  )
}

export default Cart