import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Products</Link>
        </li>
        <li>
          <Link href="/">Product - p1</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
