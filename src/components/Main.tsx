import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-2">
      {children}
    </main>
  );
};

export default Main;
