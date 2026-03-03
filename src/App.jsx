import Layout from "./layouts/Layout";
import Hero from "./sections/Hero";
import Welcome from "./sections/Welcome";
import Schools from "./sections/Schools";
import Testimonials from "./sections/Testimonials";
import Essence from "./sections/Essence";
import Facilities from "./sections/Facilities";
import Leadership from "./sections/Leadership";
import News from "./sections/News";
import "./styles/index.css";

function App() {
  return (
    <Layout>
      <Hero />
      <Welcome />
      <Schools />
      <Testimonials />
      <Essence />
      <Facilities />
      <Leadership />
      <News />
    </Layout>
  );
}

export default App;
