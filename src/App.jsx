import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />

      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
