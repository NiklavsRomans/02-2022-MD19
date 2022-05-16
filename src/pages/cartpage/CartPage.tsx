import { useSelector } from 'react-redux';
import CartProducts from '../../components/cartproduct/CartProduct';
import { RootState } from '../../redux/store';
import './CartPage.scss';

const CartPage = () => {
  const cartProducts = useSelector((state: RootState) => state.shoppingProducts);
  const totalSum = cartProducts.reduce((sum, item) => sum + (item.count * item.price), 0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="shopping__cart--wrapper">
            {cartProducts.map(({
              title,
              count,
              price,
              imgSrc,
              id,
            }) => (
              <CartProducts
                id={id}
                title={title}
                key={id}
                price={price}
                imgSrc={imgSrc}
                count={count}
              />
            ))}
          </div>
          <span className="shopping__cart--total">
            {`Total: ${totalSum} EUR`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
