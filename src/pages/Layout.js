import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Store</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;