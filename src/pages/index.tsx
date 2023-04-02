import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

const HomePage = () => {
  return (
    <div className="flex flex-col bg-green-100  min-h-screen">
      <Header />
      <Main>Właściwa zawartość</Main>
      <Footer />
    </div>
  );
};

export default HomePage;
