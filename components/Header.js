import Nav from './Nav';

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Lost-n-Found</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <a>Search</a>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;