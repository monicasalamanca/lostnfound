import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/lost">
      <a>Lost</a>
    </Link>
    <Link href="/found">
      <a>Found</a>
    </Link>
    <Link href="/report">
      <a>Report</a>
    </Link>
  </div>
);

export default Nav;