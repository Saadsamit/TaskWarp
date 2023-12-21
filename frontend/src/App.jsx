import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-Roboto">
      <Navbar />
      <div className="min-h-[calc(100vh-285px)]">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
