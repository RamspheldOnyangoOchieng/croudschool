import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Approach from "./pages/Approach";
import Schools from "./pages/Schools";
import Facilities from "./pages/Facilities";
import FAQ from "./pages/FAQ";
import News from "./pages/News";
import Fees from "./pages/Fees";
import Enquire from "./pages/Enquire";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/news" element={<News />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/enquire" element={<Enquire />} />
      </Routes>
    </Router>
  );
}

export default App;
