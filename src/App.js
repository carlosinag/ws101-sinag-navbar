// import Navbar from "./Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// import Navbar from "./Navbar";

// function App() {
//   let component
//   switch (window.location.pathname) {
//     case "/":
//       component = <App />
//       break
//     case "/home":
//       component = <Home />
//       break
//     case "/about":
//       component = <About />
//       break
//     case "/contact":
//       component = <Contact />
//       break
//   }
//   return (
//     <>
//       <Navbar />
//       <div className="container">{component}</div>
//     </>
//   );
// }

// export default App;


// import "./App.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About  from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
  <div className="App">
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
