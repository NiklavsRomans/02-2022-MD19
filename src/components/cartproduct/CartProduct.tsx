import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { DecreaseItemQuantity, increaseItemQuantity, removeItem } from '../../redux/reducers/shoppingCartSlice';
import QuantityButtons from '../changequantitybuttons/ChangeQuantityButtons';
import './CartProduct.scss';

type CartProductProps = {
    title: string
    count: number
    price: number
    imgSrc: string
    id: number
}

const CartProducts:FC<CartProductProps> = ({
  title, count, price, imgSrc, id,
}) => {
  const dispatch = useDispatch();
  const total = (count * price).toFixed(2);

  const removeProduct = () => {
    dispatch(removeItem(title));
  };

  const increaseProductQuantity = () => {
    dispatch(increaseItemQuantity(title));
  };

  const decreaseProductQuantity = () => {
    dispatch(DecreaseItemQuantity(title));
  };

  return (
    <div className="shopping__cart--list">
      <img className="shopping__cart--image" src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <div className="shopping__cart--info">
        <span>{`Price per unit: ${price.toFixed(2)}`}</span>
        <span>
          <QuantityButtons
            decreaseQuantity={decreaseProductQuantity}
            increaseQuantity={increaseProductQuantity}
            quantity={count}
          />
        </span>
        <span className="shopping__cart-item--total">{`Total: ${total}`}</span>
      </div>
      <button onClick={() => { removeProduct(); }}>Remove</button>
    </div>
  );
};

export default CartProducts;
