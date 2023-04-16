import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}
const Layout = ({ children }: MainProps) => {
  return (
    <div className="flex flex-col  min-h-screen">
      <Header />
      <div className="flex-grow"> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
