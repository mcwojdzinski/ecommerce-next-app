import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "./Nav";

const Header = () => {
  const router = useRouter();
  const isActive = (url: string): boolean => {
    return router.pathname === url;
  };
  return (
    <header className="w-full mx-auto">
      <Navbar />
      <nav className="bg-gray-500 text-white  px-4 py-2">
        <Link className={isActive("/") ? "font-bold" : ""} href="/">
          Główna
        </Link>
        <Link className={isActive("/about") ? "font-bold" : ""} href="/about">
          O nas
        </Link>
      </nav>
    </header>
  );
};

export default Header;
