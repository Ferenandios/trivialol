import { FC } from "react";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

const App: FC = (): JSX.Element => {
  return (
    <>
      <div>
        <main className="container">
          <Banner />
          <About />
          <Team />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
