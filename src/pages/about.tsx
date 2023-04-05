import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

const AboutPage = () => {
  return (
    <div className="flex flex-col bg-green-100  min-h-screen">
      <Header />
      <Main>Hello from about us page</Main>
      <Footer />
    </div>
  );
};

export default AboutPage;
