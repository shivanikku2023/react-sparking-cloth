import { Link } from 'react-router-dom';
// Functional Component with Arrow Function
import MenuList from '../MenuList/MenuList';
import orgLogo from '../../assets/images/spark-logo.jpg';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-darkmagenta">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            <img src={orgLogo} alt="Spark Clothing Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <MenuList />

            <div className="border border-danger">
              <form className="form-inline my-2 my-lg-0">
                <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  size="70"
                  className="search-input"
                />
                <button className="search-btn" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
