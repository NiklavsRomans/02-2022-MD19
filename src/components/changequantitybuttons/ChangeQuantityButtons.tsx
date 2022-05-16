import { FC } from 'react';
import './ChangeQuantityButtons.scss';

type ChangeQuantityButtonsProps = {
    increaseQuantity: () => void
    decreaseQuantity: () => void
    quantity: number
}

const QuantityButtons:FC<ChangeQuantityButtonsProps> = ({ increaseQuantity, decreaseQuantity, quantity }) => (
  <div>
    <button className="item__cart--btn" disabled={quantity === 1} onClick={decreaseQuantity}>-</button>
    <span className="quantity">{quantity}</span>
    <button className="item__cart--btn" onClick={increaseQuantity}>+</button>
  </div>
);

export default QuantityButtons;
