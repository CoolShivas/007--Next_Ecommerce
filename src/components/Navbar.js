import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <ul>
        <li>
          <Link href="/" className="text-orange-500 font-bold text-3xl">
            Shiv-Store
          </Link>
        </li>
        <div className="text-orange-500 px-4 py-2 font-bold hover:text-red-600 hover:cursor-pointer">
          <ShoppingCartIcon className="w-7 h-7 inline-block"></ShoppingCartIcon>
          Cart
          <span> (0)</span>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
