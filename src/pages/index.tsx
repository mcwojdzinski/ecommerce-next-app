import Footer from "@/components/Footer";
import Header from "@/components/Header";

const HomePage = () => {
  return (
    <div className="flex flex-col bg-green-100  min-h-screen">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-2 ">
        Właściwa zawartość
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
