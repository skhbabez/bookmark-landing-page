import Downloads from "./layouts/Downloads/Downloads";
import Faq from "./layouts/Faq/Faq";
import Features from "./layouts/Features/Features";
import Footer from "./layouts/Footer/Footer";
import Hero from "./layouts/Hero/Hero";
import Navigation from "./layouts/Navigation/Navigation";
import Newsletter from "./layouts/Newsletter/Newsletter";

function App() {
  return (
    <>
      <main>
        <Navigation className="main-spacer max-w-276 mx-auto" />
        <div className="xl:ms-16 mt:mt-[2.1875rem] xl:mt-28.5 md:mt-[5.03125rem]">
          <Hero className="xl:ms-auto" />
        </div>
        <Features className="mt-32 md:mt-31.5 xl:mt-20" />
        <Downloads className="mx-auto main-spacer mt-33.25 md:mt-[9.51rem] xl:mt-40.75" />
        <Faq className="mx-auto mt-32 md:mt-35.5 xl:mt-40.25 main-spacer" />
        <Newsletter className="w-full mt-32 md:mt-37.25 xl:mt-44.25" />
      </main>
      <Footer />
    </>
  );
}

export default App;
