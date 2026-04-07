import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Cards from "./components/Cards";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <Form />
      <Footer />
    </main>
  );
}