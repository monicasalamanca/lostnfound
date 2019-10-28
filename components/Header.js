import Nav from './Nav';
import Link from 'next/link';
import HeaderStyle from './styles/HeaderStyle';

const Header = () => (
  <HeaderStyle>
    <div className="header-wrapper">
      <div className="nav-bar">
        <Link href="/">
          <a>Lost-n-Found</a>
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