import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="relative flex flex-wrap justify-center gap-2 md:gap-4 md:mx-20 top-28 bottom-28 h-max">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
