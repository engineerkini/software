import Header from "./components/layout/Header";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Services from "./pages/services";
export default function MainHome() {
  return (
      <>
    <Header />  
    <Home />
    <Services />
    <Contact />
      </>
  );
}
