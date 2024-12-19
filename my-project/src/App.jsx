import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Maincontent from "./components/Maincontent";
import Docs from "./components/Docs"; // Import the new Docs component
import Awsscripts from "./components/Awsscripts";
function App() {
  return (
    <Router>
      <Header /> {/* Keep Header as a standalone component */}
      <main>
        <Routes>
          <Route path="/" element={<Maincontent />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/awsscripts" element={<Awsscripts />} />
        </Routes>
      </main>
      <Footer /> {/* Keep Footer as a standalone component */}
    </Router>
  );
}

export default App;
