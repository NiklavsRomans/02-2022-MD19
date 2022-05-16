import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducers/shoppingCartSlice';
import QuantityButtons from '../changequantitybuttons/ChangeQuantityButtons';
import './ProductCard.scss';

type ProductCardProps = {
    imgSrc: string
    title:string
    price: number
    id: number
}

const ProductCard:FC<ProductCardProps> = ({
  title, imgSrc, price, id,
}) => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  const increaseItemQuantity = () => {
    setCounter(counter + 1);
  };

  const decreaseItemQuantity = () => {
    setCounter(counter - 1);
  };

  const addItemsToCart = () => {
    dispatch(addToCart({
      title, count: counter, price, imgSrc, id,
    }));
  };

  return (
    <div className="products__card--wrapper">
      <div className="products__card">
        <div className="products__card--image">
          <img className="img" src={imgSrc} alt={title} />
        </div>
        <div className="products__card--info">
          <h3 className="products__card--title">{title}</h3>
          <span>{`Price: ${price}`}</span>
        </div>
        <div className="products__card--buttons">
          <QuantityButtons
            decreaseQuantity={decreaseItemQuantity}
            increaseQuantity={increaseItemQuantity}
            quantity={counter}
          />
          <button className="products__card--button--add" onClick={addItemsToCart}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
