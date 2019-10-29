import Nav from './Nav';
import Link from 'next/link';
import HeaderStyle from './styles/HeaderStyle';

const Header = () => (
  <HeaderStyle>
    <div className="header-wrapper">
      <div className="nav-bar">
        <Link href="/">
          <a className="logo">Lst<span>n</span>Fnd</a>
        </Link>
        <Nav />
      </div>
      <div className="sub-bar">
        <a>Search</a>
      </div>
    </div>
  </HeaderStyle>
);

export default Header;