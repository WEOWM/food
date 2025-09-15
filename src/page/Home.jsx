import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import CarouselSlider from "../components/carousel/CarouselSlider";
import Category from "./category/Category.jsx";
import ProductCard from "./product card/ProductCard";
import Footer from "../components/footer/Footer";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("signup");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <header>
        <Header />
      </header>

      <section>
        <CarouselSlider />
      </section>

      <section>
        <Category />
      </section>

      <section>
        <ProductCard />
      </section>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default Home;
