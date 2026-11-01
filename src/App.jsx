import Batch from "./components/home/Batch";
import Hero from "./components/home/Hero";
import WhyChoose from "./components/home/WhyChoose";
import Navbar from "./components/shared/Navbar";
import Topbar from "./components/shared/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Batch />
      <WhyChoose />
    </div>
  );
}

export default App;
