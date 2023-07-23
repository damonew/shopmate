import { useTitle } from "../hooks/useTitle";

import "./CartCard.css";

export const CartCard = ({ product }) => {
  useTitle('Cart');

  const {name, price, image} = product;

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button>Remove</button>
      </div>
  )
}
