import { FC } from "react";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Plan from "./components/Plan/Plan";
import SteveJobs from "./components/SteveJobs/SteveJobs";

const App: FC = (): JSX.Element => {
  return (
    <>
      <div className="w-full">
        <main className="container w-full mx-auto">
          <Banner />
          <About />
          <Team />
          <Plan />
          <SteveJobs />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
