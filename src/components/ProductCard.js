import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const { id, name, price, image } = product;

  useEffect(() => {
    setIsInCart(cartList.find(cartItem => cartItem.id === id));
  }, [cartList, id])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ?
          <button className="remove" onClick={() => removeFromCart(product)}>Remove</button>
          :
          <button className="add" onClick={() => addToCart(product)}>Add To Cart</button>
        }
      </div>
    </div>
  )
}
