import Downloads from "./layouts/Downloads/Downloads";
import Faq from "./layouts/Faq/Faq";
import Features from "./layouts/Features/Features";
import Footer from "./layouts/Footer/Footer";
import Newsletter from "./layouts/Newsletter/Newsletter";

function App() {
  return (
    <>
      <main className="">
        <Features />
        <Downloads className="mx-auto main-spacer" />
        <Faq className="mx-auto mt-32 md:mt-35.5 xl:mt-40.25 main-spacer" />
        <Newsletter className="w-full mt-32 md:mt-37.25 xl:mt-44.25" />
      </main>
      <Footer />
    </>
  );
}

export default App;
