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
    </header>
  );
};

export default Header;
