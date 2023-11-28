import React, { useContext } from 'react'
import './cartItem.css'
import { ShopContext } from '../../context/ShopContex'

const CartItem = (props) => {
    const {id,productName,price,productImage} = props.data
    const {cartItems,addToCart,removeFromCart} = useContext(ShopContext)
  return (
    <>
        <div className='cartItems'>
            <div className="cartItem">

                <div className="image">
            <img src={productImage} alt="" srcset="" /> 
            </div>
            <div>
            <div className="description">
                <p>
                    {/* {' '} */}
                    <b>{productName}</b>
                </p>
                <p>${price}</p>

                
                </div>
                <div className="controlHandler">
                    <button onClick={()=>removeFromCart(id)}>-</button>
                    <input type="number"  value={cartItems[id] }/>
                    <button onClick={()=> addToCart(id)}>+</button>
                </div>
            </div>
            

            </div>
            {/* <p>hey</p> */}

        </div>
       
    </>
    
  )
}


export default CartItem