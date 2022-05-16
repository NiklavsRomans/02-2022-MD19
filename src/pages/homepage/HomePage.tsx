import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/productcard/ProductCard';
import shoppingItems from '../../data/ItemList';
import { loadMore } from '../../redux/reducers/allProductsSlice';
import { RootState } from '../../redux/store';
import './HomePage.scss';

const HomePage = () => {
  const products = useSelector((state:RootState) => state.loadProducts);
  const dispatch = useDispatch();

  const loadMoreProducts = () => {
    dispatch(loadMore());
  };

  return (
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12">
          <div className="fixer">
            <div className="products">
              <div className="products__card--wrapper">
                {products.map(({
                  title, id, imgSrc, price,
                }) => (
                  <ProductCard
                    key={id}
                    imgSrc={imgSrc}
                    title={title}
                    price={price}
                    id={id}
                  />
                ))}
              </div>
              {products.length < shoppingItems.length && (
              <button
                className="products__card--load"
                onClick={() => { loadMoreProducts(); }}
              >
                Load More

              </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
