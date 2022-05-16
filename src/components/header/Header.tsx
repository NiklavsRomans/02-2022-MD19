import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const getActiveLink = (isActive: boolean) => (isActive ? 'link link--active' : 'link');

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <header>
            <nav className="navigation">
              <NavLink to="/" className={({ isActive }) => getActiveLink(isActive)}>Home</NavLink>
              <NavLink to="/cart" className={({ isActive }) => getActiveLink(isActive)}>Cart</NavLink>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
