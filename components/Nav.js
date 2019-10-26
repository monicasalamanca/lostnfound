import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/lost">
      <a>Lost</a>
    </Link>
    <Link href="/found">
      <a>Found</a>
    </Link>
    <p>Report</p>
  </div>
);

export default Nav;