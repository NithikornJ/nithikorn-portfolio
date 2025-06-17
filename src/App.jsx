import "./App.css";
import Navbar from "./layouts/Navbar.jsx";
import Landing from "./page/index.jsx";
import Footer from "./layouts/Footer.jsx";
import { useState } from "react";

function App() {
  const [theme,setTheme] = useState('light-theme')
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
    console.log(theme);
  }

  return (
    <div data-theme={theme} className="bg-base-200">
      <Navbar  toggleTheme={toggleTheme}/>
      <Landing/>
      <Footer />
    </div>
  );
}

export default App;
