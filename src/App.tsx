import Faq from "./layouts/Faq/Faq";
import Footer from "./layouts/Footer/Footer";
import Newsletter from "./layouts/Newsletter/Newsletter";

function App() {
  return (
    <>
      <main className="px-8 md:px-20 xl:px-0">
        <Faq className="mx-auto" />
        <Newsletter className="w-full mt-32 md:mt-37.25 xl:mt-44.25" />
      </main>
      <Footer />
    </>
  );
}

export default App;
