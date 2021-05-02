import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route path="/" component={Home} />
          <Route path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
